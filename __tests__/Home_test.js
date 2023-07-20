import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
import Home from '../src/screens/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

it('should render Screen correctly', () => {
  const {getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  expect(getByText('Start Puzzle'));
  expect(getByText('Leaders Board'));
  expect(getByText('COUNTRIES'));
  expect(getByText('CARS'));
  expect(getByText('FRIUTS'));
});

it('should start puzzle', () => {
  const {getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  fireEvent.press(getByText('COUNTRIES'));
  fireEvent.press(getByText('Start Puzzle'));
  expect(mockedNavigate).toHaveBeenCalledTimes(1);
});

it('should open Leader Board  dialog', () => {
  const {getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const leaderBoardText = getByText('Leaders Board');
  fireEvent.press(getByText('Leaders Board'));
  expect(getByText('Close'));
});

it('should throw error on starting puzzle without choosing category', () => {
  const {getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  fireEvent.press(getByText('Start Puzzle'));
  jest.spyOn(Alert, 'alert');
});
