import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('react-native-share', () => ({
  default: jest.fn(),
}));



test('renders correctly', () => {
  render(<App />);
});


