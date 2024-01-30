## IMPORTS
import unittest
from unittest.mock import MagicMock, patch
from pydantic import ValidationError
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from ..user import User, UserCreate, UserInDB
from .. import models

## CONSTANTS AND DEFAULTS
DEFAULT_USERNAME = "testuser"
DEFAULT_EMAIL = "test@example.com"
DEFAULT_PASSWORD = "password123"
DEFAULT_PASSWORD_HASH = "hashedpassword123"
DEFAULT_USER_ID = 1

## MOCK CLASSES AND FUNCTIONS
class MockUser:
    def __init__(self, username, email, password_hash, id=DEFAULT_USER_ID):
        self.username = username
        self.email = email
        self.password_hash = password_hash
        self.id = id

    def __eq__(self, other):
        return (
            self.username == other.username and
            self.email == other.email and
            self.password_hash == other.password_hash and
            self.id == other.id
        )

## TEST CASES
class TestUser(unittest.TestCase):

    ## SETUP AND TEARDOWN
    def setUp(self):
        self.db = MagicMock(spec=Session)
        self.user_create = UserCreate(username=DEFAULT_USERNAME, email=DEFAULT_EMAIL, password=DEFAULT_PASSWORD)
        self.user_in_db = MockUser(username=DEFAULT_USERNAME, email=DEFAULT_EMAIL, password_hash=DEFAULT_PASSWORD_HASH)

    ## TEST CREATE_USER
    def test_create_user_success(self):
        self.db.query().filter().first.return_value = None
        self.db.add = MagicMock()
        self.db.commit = MagicMock()
        self.db.refresh = MagicMock()

        created_user = User.create_user(self.db, self.user_create)
        self.assertIsInstance(created_user, UserInDB)

    def test_create_user_existing_username(self):
        self.db.query().filter().first.return_value = self.user_in_db

        with self.assertRaises(HTTPException) as context:
            User.create_user(self.db, self.user_create)

        self.assertEqual(context.exception.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(context.exception.detail, "Username or email already registered.")

    def test_create_user_database_error(self):
        self.db.query().filter().first.side_effect = Exception("Database error")

        with self.assertRaises(HTTPException) as context:
            User.create_user(self.db, self.user_create)

        self.assertEqual(context.exception.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## TEST AUTHENTICATE_USER
    def test_authenticate_user_success(self):
        self.db.query().filter().first.return_value = self.user_in_db

        with patch('bcrypt.checkpw', return_value=True):
            authenticated_user = User.authenticate_user(self.db, DEFAULT_USERNAME, DEFAULT_PASSWORD)

        self.assertIsInstance(authenticated_user, UserInDB)

    def test_authenticate_user_incorrect_password(self):
        self.db.query().filter().first.return_value = self.user_in_db

        with patch('bcrypt.checkpw', return_value=False):
            authenticated_user = User.authenticate_user(self.db, DEFAULT_USERNAME, DEFAULT_PASSWORD)

        self.assertIsNone(authenticated_user)

    def test_authenticate_user_not_found(self):
        self.db.query().filter().first.return_value = None

        authenticated_user = User.authenticate_user(self.db, DEFAULT_USERNAME, DEFAULT_PASSWORD)
        self.assertIsNone(authenticated_user)

    def test_authenticate_user_database_error(self):
        self.db.query().filter().first.side_effect = Exception("Database error")

        with self.assertRaises(HTTPException) as context:
            User.authenticate_user(self.db, DEFAULT_USERNAME, DEFAULT_PASSWORD)

        self.assertEqual(context.exception.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## TEST VALIDATION
    def test_user_create_validation_error(self):
        with self.assertRaises(ValidationError):
            UserCreate(username=123, email=DEFAULT_EMAIL, password=DEFAULT_PASSWORD)

    def test_user_create_validation_success(self):
        try:
            UserCreate(username=DEFAULT_USERNAME, email=DEFAULT_EMAIL, password=DEFAULT_PASSWORD)
        except ValidationError:
            self.fail("UserCreate raised ValidationError unexpectedly!")

## RUN TESTS
if __name__ == '__main__':
    unittest.main()
