## SETUP
import unittest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient
from http import HTTPStatus
from main import app, Main

## TEST_MAIN_CLASS
class TestMainClass(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)
        self.main = Main()

    @patch('main.Session')
    def test_get_debate_debate_exists(self, mock_session):
        """Test if get_debate returns the debate when it exists"""
        mock_debate = MagicMock()
        mock_debate.id = 1
        mock_session.query.return_value.filter.return_value.first.return_value = mock_debate
        debate = self.main.get_debate(debate_id=1, db=mock_session)
        self.assertEqual(debate, mock_debate)

    @patch('main.Session')
    def test_get_debate_debate_not_found(self, mock_session):
        """Test if get_debate raises HTTPException when debate is not found"""
        mock_session.query.return_value.filter.return_value.first.return_value = None
        with self.assertRaises(HTTPException) as context:
            self.main.get_debate(debate_id=999, db=mock_session)
        self.assertTrue(isinstance(context.exception, HTTPException))
        self.assertEqual(context.exception.status_code, HTTPStatus.NOT_FOUND)

## TEST_CREATE_USER_ENDPOINT
class TestCreateUserEndpoint(TestMainClass):
    @patch('main.User')
    @patch('main.get_db')
    def test_create_user_endpoint(self, mock_get_db, mock_user):
        """Test if create_user_endpoint creates a user"""
        mock_user.create_user.return_value = {"username": "test_user"}
        response = self.client.post("/users/", json={"username": "test_user", "password": "test_pass"})
        self.assertEqual(response.status_code, HTTPStatus.OK)
        self.assertEqual(response.json(), {"username": "test_user"})

## TEST_ADD_PARTICIPANT_TO_DEBATE
class TestAddParticipantToDebate(TestMainClass):
    @patch('main.Main.get_debate')
    @patch('main.get_current_user')
    @patch('main.get_db')
    def test_add_participant_to_debate(self, mock_get_db, mock_get_current_user, mock_get_debate):
        """Test if add_participant_to_debate adds a participant to the debate"""
        mock_debate = MagicMock()
        mock_user = MagicMock()
        mock_get_current_user.return_value = mock_user
        mock_get_debate.return_value = mock_debate
        response = self.client.post("/debates/1/participants/")
        self.assertEqual(response.status_code, HTTPStatus.OK)
        self.assertEqual(response.json(), {"message": "Participant added to the debate"})
        mock_debate.add_participant.assert_called_with(user=mock_user)

## TEST_ADD_CONTRIBUTION_TO_DEBATE
class TestAddContributionToDebate(TestMainClass):
    @patch('main.Main.get_debate')
    @patch('main.AIScoring')
    @patch('main.Rankings')
    @patch('main.get_current_user')
    @patch('main.get_db')
    def test_add_contribution_to_debate(self, mock_get_db, mock_get_current_user, mock_rankings_service, mock_ai_scoring_service, mock_get_debate):
        """Test if add_contribution_to_debate adds a contribution and scores it"""
        mock_debate = MagicMock()
        mock_user = MagicMock()
        mock_user.username = "test_user"
        mock_get_current_user.return_value = mock_user
        mock_get_debate.return_value = mock_debate
        mock_ai_scoring_service.evaluate_contribution.return_value = 0.8
        response = self.client.post("/debates/1/contributions/", json={"content": "test content"})
        self.assertEqual(response.status_code, HTTPStatus.OK)
        self.assertEqual(response.json(), {"message": "Contribution added and scored"})
        mock_debate.add_contribution.assert_called_with(user=mock_user, content="test content")
        mock_rankings_service.update_rankings.assert_called_with(user=mock_user, score=0.8)

    @patch('main.Main.get_debate')
    @patch('main.AIScoring')
    @patch('main.get_current_user')
    @patch('main.get_db')
    def test_add_contribution_to_debate_invalid_score(self, mock_get_db, mock_get_current_user, mock_ai_scoring_service, mock_get_debate):
        """Test if add_contribution_to_debate raises HTTPException when score is invalid"""
        mock_ai_scoring_service.evaluate_contribution.return_value = None
        response = self.client.post("/debates/1/contributions/", json={"content": "test content"})
        self.assertEqual(response.status_code, HTTPStatus.BAD_REQUEST)
        self.assertEqual(response.json(), {"detail": "Invalid score"})

## TEST_WEBSOCKET_ENDPOINT
class TestWebsocketEndpoint(TestMainClass):
    @patch('main.Main.get_debate')
    @patch('main.RealTime')
    @patch('main.get_db')
    async def test_websocket_endpoint(self, mock_get_db, mock_real_time_service, mock_get_debate):
        """Test if websocket_endpoint subscribes to a debate"""
        mock_debate = MagicMock()
        mock_debate.topic = "test_topic"
        mock_get_debate.return_value = mock_debate
        with patch('main.WebSocket') as mock_websocket:
            await app.websocket_endpoint(websocket=mock_websocket, debate_id=1, db=mock_get_db)
            mock_real_time_service.subscribe.assert_called_with(websocket=mock_websocket, debate_id=1, topic="test_topic")

if __name__ == '__main__':
    unittest.main()
