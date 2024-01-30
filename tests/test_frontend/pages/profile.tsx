## TEST_FRONTEND_PAGES_PROFILE_TEST_TSX

"""
// /home/nullnull/Socrates/workspace/Socrates/tests/frontend/pages/profile.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProfilePage from '../../../frontend/pages/profile';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  localStorage.clear();
});

## TEST_PROFILE_PAGE_RENDER_LOADING
test('renders loading state initially', () => {
  render(<ProfilePage />);
  expect(screen.getByText('Loading profile...')).toBeInTheDocument();
});

## TEST_PROFILE_PAGE_RENDER_ERROR_FETCHING
test('renders error message when user profile cannot be fetched', async () => {
  fetchMock.mockReject(new Error('User profile could not be fetched.'));
  render(<ProfilePage />);
  await waitFor(() => expect(screen.getByText('User profile not available.')).toBeInTheDocument());
});

## TEST_PROFILE_PAGE_RENDER_PROFILE_SUCCESS
test('renders user profile after successful fetch', async () => {
  const userProfile = {
    id: 1,
    username: 'testuser',
    email: 'testuser@example.com',
  };
  fetchMock.mockResponseOnce(JSON.stringify(userProfile));
  render(<ProfilePage />);
  await waitFor(() => expect(screen.getByText('Profile')).toBeInTheDocument());
  expect(screen.getByLabelText('Username')).toHaveValue(userProfile.username);
  expect(screen.getByLabelText('Email')).toHaveValue(userProfile.email);
});

## TEST_PROFILE_PAGE_API_CALL
test('makes an API call to the correct endpoint with authorization token', async () => {
  const token = 'fake-token';
  localStorage.setItem('token', token);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  const userProfile = {
    id: 1,
    username: 'testuser',
    email: 'testuser@example.com',
  };
  fetchMock.mockResponseOnce(JSON.stringify(userProfile));
  render(<ProfilePage />);
  await waitFor(() => expect(screen.getByText('Profile')).toBeInTheDocument());
  expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
});

"""
