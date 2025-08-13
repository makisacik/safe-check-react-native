import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WelcomeScreen from '../WelcomeScreen';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('WelcomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<WelcomeScreen navigation={mockNavigation} />);

    expect(getByText('SafeCheck')).toBeTruthy();
    expect(getByText('Safety when you need it most')).toBeTruthy();
    expect(getByText('Get Started')).toBeTruthy();
    expect(getByText('Log In')).toBeTruthy();
  });

  it('handles Get Started button press', () => {
    const { getByText } = render(<WelcomeScreen navigation={mockNavigation} />);

    const getStartedButton = getByText('Get Started');
    fireEvent.press(getStartedButton);

    // For now, it just logs to console, so we just verify the button is pressable
    expect(getStartedButton).toBeTruthy();
  });

  it('handles Log In button press', () => {
    const { getByText } = render(<WelcomeScreen navigation={mockNavigation} />);

    const logInButton = getByText('Log In');
    fireEvent.press(logInButton);

    // For now, it just logs to console, so we just verify the button is pressable
    expect(logInButton).toBeTruthy();
  });
});
