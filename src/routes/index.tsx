import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import NewTweet from '../pages/NewTweet';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen key="home" name="Home" component={Home} />
      <Stack.Screen key="newTweet" name="NewTweet" component={NewTweet} />
    </Stack.Navigator>
  );
};

export default Routes;
