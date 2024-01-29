## test_app.py
"""
This module contains unit tests for the app.py.
"""

import unittest
from unittest.mock import patch, MagicMock
from starlette.testclient import TestClient
from http import HTTPStatus

## Import the necessary classes from the app.py file
from app import app, main_service, get_db, get_current_user
from .user import UserInDB

## Set up the test client for FastAPI
client = TestClient(app)

## SETUP
# Mock dependencies that are used in the app
def get_db_override():
    """Create a mock session for database dependency."""
    session = MagicMock()
    return session

def get_current_user_override():
    """Create a mock current user for dependency."""
    user = UserInDB(username="test_user", email="test@example.com")
    return user

app.dependency_overrides[get_db] = get_db_override
app.dependency_overrides[get_current_user] = get_current_user_override

## TEST_CASES

## Test the create_user_endpoint
class TestCreateUserEndpoint(unittest.TestCase):
    ## Test successful user creation
    def test_create_user_success(self):
        with patch.object(main_service, 'create_user', return_value=UserInDB(username="test_user", email="test@example.com")) as mock_method:
            response = client.post("/users/", json={"username": "test_user", "email": "test@example.com", "password": "password123"})
            self.assertEqual(response.status_code, HTTPStatus.OK)
            self.assertEqual(response.json(), {"username": "test_user", "email": "test@example.com"})
            mock_method.assert_called_once()

    ## Test user creation with invalid data
    def test_create_user_invalid_data(self):
        response = client.post("/users/", json={"username": "", "email": "test@example.com", "password": "password123"})
        self.assertEqual(response.status_code, HTTPStatus.UNPROCESSABLE_ENTITY)

## Test the add_participant_to_debate endpoint
class TestAddParticipantToDebateEndpoint(unittest.TestCase):
    ## Test adding participant successfully
    def test_add_participant_success(self):
        with patch.object(main_service, 'get_debate', return_value=MagicMock()) as mock_get_debate:
            debate_mock = mock_get_debate.return_value
            debate_mock.add_participant = MagicMock()
            response = client.post("/debates/1/participants/")
            self.assertEqual(response.status_code, HTTPStatus.OK)
            self.assertEqual(response.json(), {"message": "Participant added to the debate"})
            debate_mock.add_participant.assert_called_once()

    ## Test adding participant to non-existing debate
    def test_add_participant_non_existing_debate(self):
        with patch.object(main_service, 'get_debate', side_effect=HTTPException(status_code=404, detail="Debate not found")):
            response = client.post("/debates/999/participants/")
            self.assertEqual(response.status_code, HTTPStatus.NOT_FOUND)

## Test the add_contribution_to_debate endpoint
class TestAddContributionToDebateEndpoint(unittest.TestCase):
    ## Test adding contribution successfully
    def test_add_contribution_success(self):
        with patch.object(main_service, 'add_contribution_and_score', return_value={"message": "Contribution added and scored"}):
            response = client.post("/debates/1/contributions/", json={"content": "Test contribution"})
            self.assertEqual(response.status_code, HTTPStatus.OK)
            self.assertEqual(response.json(), {"message": "Contribution added and scored"})

    ## Test adding contribution with invalid data
    def test_add_contribution_invalid_data(self):
        response = client.post("/debates/1/contributions/", json={"content": ""})
        self.assertEqual(response.status_code, HTTPStatus.UNPROCESSABLE_ENTITY)

## Test the websocket_endpoint
class TestWebsocketEndpoint(unittest.TestCase):
    ## Test successful WebSocket connection
    @patch('app.WebSocket')
    def test_websocket_success(self, mock_websocket):
        with patch.object(main_service, 'get_debate', return_value=MagicMock()):
            with patch.object(main_service.real_time_service, 'subscribe', return_value=None):
                client.websocket_connect("/ws/debates/1/")
                mock_websocket.assert_called_once()

    ## Test WebSocket with exception
    @patch('app.WebSocket')
    def test_websocket_exception(self, mock_websocket):
        with patch.object(main_service, 'get_debate', side_effect=Exception("Error")):
            with patch.object(mock_websocket, 'close', return_value=None):
                client.websocket_connect("/ws/debates/1/")
                mock_websocket.close.assert_called_once()

## RUN_TESTS
if __name__ == '__main__':
    unittest.main()
