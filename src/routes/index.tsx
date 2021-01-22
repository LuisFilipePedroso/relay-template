import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen key="home" name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
