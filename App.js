
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Puzzle} from '_screens';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Puzzle"
            component={Puzzle}
            options={{headerShown: true}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
