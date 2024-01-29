/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

// Section for Home Component tests
describe('Home Component', () => {
  // Renders without crashing
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to the Debate Platform')).toBeInTheDocument();
  });

  // Contains NavigationBar component
  test('contains navigation bar', () => {
    render(<Home />);
    // Assuming NavigationBar has a role attribute set to 'navigation'
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  // Displays the correct welcome message
  test('displays the correct welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to the Debate Platform')).toBeInTheDocument();
    expect(screen.getByText('Engage in meaningful discussions, share your opinions, and challenge your critical thinking skills.')).toBeInTheDocument();
  });

  // Has correct styling
  test('has correct styling', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText('Welcome to the Debate Platform');
    // Checking for multiple classes
    expect(welcomeMessage).toHaveClass('text-2xl font-bold mb-4');
    expect(screen.getByText('Engage in meaningful discussions, share your opinions, and challenge your critical thinking skills.')).toHaveClass('text-gray-700');
  });
});
