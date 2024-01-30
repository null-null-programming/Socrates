"""
Unit tests for the NavigationBar component.
"""

import unittest
from unittest.mock import patch

# Assuming there is a similar testing library for React components in Python
# as @testing-library/react in JavaScript, but using a hypothetical library named 'python_react_test_utils'.
from python_react_test_utils import render, cleanup

# Import the NavigationBar component from the transpiled output directory
from transpiled_output.frontend.components.NavigationBar import NavigationBar

class TestNavigationBar(unittest.TestCase):
    def setUp(self):
        # Setup code before each test runs
        self.component = None

    def tearDown(self):
        # Cleanup code after each test runs
        if self.component:
            cleanup(self.component)
            self.component = None

    def test_navigation_bar_without_username(self):
        """Test NavigationBar renders correctly without a username"""
        self.component = render(NavigationBar, {'username': None})
        # Check if the Login and Register links are present
        self.assertIn('Login', self.component.text_content())
        self.assertIn('Register', self.component.text_content())
        # Check if the Profile and Logout links are not present
        self.assertNotIn('Profile', self.component.text_content())
        self.assertNotIn('Logout', self.component.text_content())

    def test_navigation_bar_with_username(self):
        """Test NavigationBar renders correctly with a username"""
        self.component = render(NavigationBar, {'username': 'testuser'})
        # Check if the Profile and Logout links are present
        self.assertIn('Profile', self.component.text_content())
        self.assertIn('Logout', self.component.text_content())
        # Check if the Login and Register links are not present
        self.assertNotIn('Login', self.component.text_content())
        self.assertNotIn('Register', self.component.text_content())

    def test_navigation_bar_links(self):
        """Test that NavigationBar contains the correct links"""
        self.component = render(NavigationBar, {'username': 'testuser'})
        # Check if the Home, Debate, and Rankings links are present
        self.assertIn('Home', self.component.text_content())
        self.assertIn('Debate', self.component.text_content())
        self.assertIn('Rankings', self.component.text_content())
        # Check the href attributes of the links
        self.assertTrue(self.component.query_by_href('/'))
        self.assertTrue(self.component.query_by_href('/debate'))
        self.assertTrue(self.component.query_by_href('/rankings'))
        self.assertTrue(self.component.query_by_href('/profile'))
        self.assertTrue(self.component.query_by_href('/api/logout'))

    @patch('transpiled_output.frontend.components.NavigationBar.NavigationBar')
    def test_navigation_bar_render_failure(self, MockNavigationBar):
        """Test that NavigationBar handles render failure gracefully"""
        MockNavigationBar.side_effect = Exception('Render failed')
        with self.assertRaises(Exception) as context:
            self.component = render(NavigationBar, {'username': 'testuser'})
        self.assertTrue('Render failed' in str(context.exception))

if __name__ == '__main__':
    unittest.main()
