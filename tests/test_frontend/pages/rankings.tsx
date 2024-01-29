## TEST_CODE

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import RankingsPage from '../../frontend/pages/rankings';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('RankingsPage', () => {
  test('displays loading message before data is fetched', () => {
    render(<RankingsPage />);
    expect(screen.getByText('Loading rankings...')).toBeInTheDocument();
  });

  test('fetches rankings and displays them', async () => {
    const mockRankings = [
      { userId: 1, username: 'User1', score: 100 },
      { userId: 2, username: 'User2', score: 95.5 },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockRankings));

    render(<RankingsPage />);

    await waitFor(() => {
      expect(screen.getByText('User1')).toBeInTheDocument();
      expect(screen.getByText('100.00')).toBeInTheDocument();
      expect(screen.getByText('User2')).toBeInTheDocument();
      expect(screen.getByText('95.50')).toBeInTheDocument();
    });
  });

  test('handles fetch error and does not crash', async () => {
    fetchMock.mockReject(() => Promise.reject('API is down'));

    render(<RankingsPage />);

    await waitFor(() => {
      expect(screen.queryByText('User1')).not.toBeInTheDocument();
      expect(screen.queryByText('Loading rankings...')).not.toBeInTheDocument();
      // Additional error handling can be tested here, such as displaying an error message to the user.
    });
  });
});
