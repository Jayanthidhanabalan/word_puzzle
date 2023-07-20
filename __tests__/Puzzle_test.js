import React from 'react';
import Puzzle from '../src/screens/Puzzle';

import { Provider } from 'react-redux';
import store from '../src/redux/store';
import {  render } from '@testing-library/react-native';

jest.mock('react-native-share', () => ({
  default: jest.fn(),
}));

it('renders correctly', () => {
  const {getByText} = render(
    <Provider store={store}>
    <Puzzle route={{params: {id: 1, name: 'COUNTRIES'}}} />,
    </Provider>
  );
  expect(getByText('NEXT'));
});

// it('should add word in top box and remove the text from the clicked box', (){
//   const {getByText} = render(
//     <Provider store={store}>
//     <Puzzle route={{params: {id: 1, name: 'COUNTRIES'}}} />,
//     </Provider>
//   );
//})
