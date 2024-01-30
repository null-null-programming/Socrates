## IMPORT_SECTION
import unittest
from unittest.mock import Mock, patch

# Mocking fastapi HTTPException and status
class HTTPException(Exception):
    def __init__(self, status_code, detail):
        self.status_code = status_code
        self.detail = detail

class status:
    HTTP_400_BAD_REQUEST = 400
    HTTP_403_FORBIDDEN = 403
    HTTP_404_NOT_FOUND = 404
    HTTP_503_SERVICE_UNAVAILABLE = 503

# Assuming the necessary classes are available in the following modules
from workspace.Socrates.debate import Debate, Participant, Contribution
from workspace.Socrates.user import UserInDB

## CONSTANTS_SECTION
# Define any constants that might be used in the tests
DEFAULT_USER_ID = 1
DEFAULT_USERNAME = "test_user"
DEFAULT_DEBATE_ID = 1
DEFAULT_DEBATE_TOPIC = "Test Topic"
DEFAULT_CONTENT = "Test Content"

## TESTCASES_SECTION
class TestDebate(unittest.TestCase):

    ## SETUP_METHOD
    def setUp(self):
        self.user = UserInDB(id=DEFAULT_USER_ID, username=DEFAULT_USERNAME)
        self.contribution = Contribution(user_id=DEFAULT_USER_ID, content=DEFAULT_CONTENT)
        self.debate = Debate(id=DEFAULT_DEBATE_ID, topic=DEFAULT_DEBATE_TOPIC)
        self.real_time_mock = Mock(spec=RealTime)
        self.ai_scoring_mock = Mock(spec=AIScoring)

    ## TEST_ADD_PARTICIPANT
    def test_add_participant(self):
        self.debate.add_participant(self.user)
        self.assertIn(Participant(id=self.user.id, username=self.user.username), self.debate.participants)

    ## TEST_ADD_PARTICIPANT_ALREADY_EXISTS
    def test_add_participant_already_exists(self):
        self.debate.add_participant(self.user)
        with self.assertRaises(HTTPException) as context:
            self.debate.add_participant(self.user)
        self.assertEqual(context.exception.status_code, status.HTTP_400_BAD_REQUEST)

    ## TEST_REMOVE_PARTICIPANT
    def test_remove_participant(self):
        self.debate.add_participant(self.user)
        self.debate.remove_participant(self.user)
        self.assertNotIn(Participant(id=self.user.id, username=self.user.username), self.debate.participants)

    ## TEST_REMOVE_PARTICIPANT_NOT_EXISTS
    def test_remove_participant_not_exists(self):
        with self.assertRaises(HTTPException) as context:
            self.debate.remove_participant(self.user)
        self.assertEqual(context.exception.status_code, status.HTTP_404_NOT_FOUND)

    ## TEST_ADD_CONTRIBUTION
    def test_add_contribution(self):
        self.debate.add_participant(self.user)
        self.debate.add_contribution(self.user, DEFAULT_CONTENT)
        self.assertIn(self.contribution, self.debate.contributions[self.user.id])

    ## TEST_ADD_CONTRIBUTION_EMPTY_CONTENT
    def test_add_contribution_empty_content(self):
        self.debate.add_participant(self.user)
        with self.assertRaises(HTTPException) as context:
            self.debate.add_contribution(self.user, " ")
        self.assertEqual(context.exception.status_code, status.HTTP_400_BAD_REQUEST)

    ## TEST_ADD_CONTRIBUTION_USER_NOT_PARTICIPANT
    def test_add_contribution_user_not_participant(self):
        with self.assertRaises(HTTPException) as context:
            self.debate.add_contribution(self.user, DEFAULT_CONTENT)
        self.assertEqual(context.exception.status_code, status.HTTP_403_FORBIDDEN)

    ## TEST_BROADCAST_UPDATE
    @patch('workspace.Socrates.debate.RealTime')
    def test_broadcast_update(self, mock_real_time_class):
        self.debate.real_time = mock_real_time_class.return_value
        self.debate.broadcast_update("Test Message")
        self.debate.real_time.broadcast_update.assert_called_once_with(self.debate, "Test Message")

    ## TEST_BROADCAST_UPDATE_WITHOUT_REALTIME
    def test_broadcast_update_without_realtime(self):
        with self.assertRaises(HTTPException) as context:
            self.debate.broadcast_update("Test Message")
        self.assertEqual(context.exception.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)

    ## TEST_EVALUATE_CONTRIBUTION_WITH_AI
    @patch('workspace.Socrates.debate.AIScoring')
    def test_evaluate_contribution_with_ai(self, mock_ai_scoring_class):
        mock_ai_scoring_class.return_value.evaluate_contribution.return_value = 0.5
        self.debate.ai_scoring = mock_ai_scoring_class.return_value
        score = self.debate.evaluate_contribution_with_ai(self.contribution)
        self.assertEqual(score, 0.5)

    ## TEST_EVALUATE_CONTRIBUTION_WITHOUT_AI
    def test_evaluate_contribution_without_ai(self):
        with self.assertRaises(HTTPException) as context:
            self.debate.evaluate_contribution_with_ai(self.contribution)
        self.assertEqual(context.exception.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)

    ## TEST_GET_ALL_CONTRIBUTIONS
    def test_get_all_contributions(self):
        self.debate.add_participant(self.user)
        self.debate.add_contribution(self.user, DEFAULT_CONTENT)
        contributions = self.debate.get_all_contributions()
        self.assertEqual(contributions, {self.user.id: [self.contribution]})

## MAIN_SECTION
if __name__ == '__main__':
    unittest.main()
