## test_rankings.py
import unittest
from pydantic import ValidationError
from Socrates.rankings import Rankings
from Socrates.user import UserInDB

class TestRankings(unittest.TestCase):
    ## SETUP_METHOD
    def setUp(self) -> None:
        """
        Set up the test environment and initialize Rankings instance.
        """
        self.rankings = Rankings()
        self.default_user_id: int = 1  # Strong type and explicit variable
        self.default_score: float = 10.0  # Strong type and explicit variable
        self.user = UserInDB(id=self.default_user_id, username='testuser', email='test@example.com')

    ## TEST_UPDATE_RANKINGS_NEW_USER
    def test_update_rankings_new_user(self):
        """
        Test update_rankings method for a new user.
        """
        self.rankings.update_rankings(self.user, self.default_score)
        self.assertIn(self.default_user_id, self.rankings.user_scores)
        self.assertEqual(self.rankings.user_scores[self.default_user_id], self.default_score)

    ## TEST_UPDATE_RANKINGS_EXISTING_USER
    def test_update_rankings_existing_user(self):
        """
        Test update_rankings method for an existing user.
        """
        self.rankings.user_scores[self.default_user_id] = self.default_score
        new_score: float = 5.0  # Strong type and explicit variable
        self.rankings.update_rankings(self.user, new_score)
        self.assertEqual(self.rankings.user_scores[self.default_user_id], self.default_score + new_score)

    ## TEST_UPDATE_RANKINGS_NEGATIVE_SCORE
    def test_update_rankings_negative_score(self):
        """
        Test update_rankings with a negative score.
        """
        self.rankings.user_scores[self.default_user_id] = self.default_score
        negative_score: float = -5.0  # Strong type and explicit variable
        self.rankings.update_rankings(self.user, negative_score)
        self.assertEqual(self.rankings.user_scores[self.default_user_id], self.default_score + negative_score)

    ## TEST_UPDATE_RANKINGS_NEGATIVE_SCORE_BELOW_ZERO
    def test_update_rankings_negative_score_below_zero(self):
        """
        Test update_rankings with a negative score that would set the user's score below zero.
        """
        initial_score: float = 3.0  # Strong type and explicit variable
        self.rankings.user_scores[self.default_user_id] = initial_score
        negative_score: float = -5.0  # Strong type and explicit variable
        self.rankings.update_rankings(self.user, negative_score)
        self.assertEqual(self.rankings.user_scores[self.default_user_id], 0)

    ## TEST_GET_RANKINGS_ORDER
    def test_get_rankings_order(self):
        """
        Test get_rankings to ensure it returns users sorted by score in descending order.
        """
        self.rankings.user_scores = {1: 30.0, 2: 40.0, 3: 20.0}
        expected_order = {2: 40.0, 1: 30.0, 3: 20.0}
        self.assertEqual(self.rankings.get_rankings(), expected_order)

    ## TEST_GET_RANKINGS_EMPTY
    def test_get_rankings_empty(self):
        """
        Test get_rankings when there are no users in the rankings.
        """
        self.assertEqual(self.rankings.get_rankings(), {})

    ## TEST_UPDATE_RANKINGS_INVALID_USER
    def test_update_rankings_invalid_user(self):
        """
        Test update_rankings with an invalid user object.
        """
        with self.assertRaises(ValidationError):
            invalid_user = {'id': 'not_an_int', 'username': 'invalid', 'email': 'invalid@example.com'}
            self.rankings.update_rankings(invalid_user, self.default_score)  # This should raise a ValidationError

    ## TEST_UPDATE_RANKINGS_INVALID_SCORE
    def test_update_rankings_invalid_score(self):
        """
        Test update_rankings with an invalid score type.
        """
        with self.assertRaises(TypeError):
            invalid_score = 'not_a_float'  # Not a float
            self.rankings.update_rankings(self.user, invalid_score)  # This should raise a TypeError

if __name__ == '__main__':
    unittest.main()
