## TEST_CODE

import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import DebatePage from '../../frontend/pages/debate';
import * as nextRouter from 'next/router';
import * as fetchMock from 'jest-fetch-mock';

// Mocking the useRouter hook from next/router
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ query: { debateId: '1' } }));

// Mocking the localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('DebatePage', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
  });

  it('renders loading state initially', () => {
    const { getByText } = render(<DebatePage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches debate topic and user ID and renders them', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ topic: 'Test Debate Topic' }));
    fetchMock.mockResponseOnce(JSON.stringify({ id: 123 }));

    window.localStorage.setItem('token', 'fake-token');

    const { getByText, findByText } = render(<DebatePage />);
    
    await findByText('Test Debate Topic');
    expect(getByText('User 123')).toBeInTheDocument();
  });

  // Additional test cases can be added here to cover different scenarios
});
