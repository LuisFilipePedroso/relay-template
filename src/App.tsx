import 'react-native-gesture-handler';

import React, {Suspense} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import {AppColors} from './styles/global';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <SafeAreaView style={{flex: 1, backgroundColor: AppColors.GRAY}}>
            <Suspense fallback={<ActivityIndicator />}>
              <Routes />
            </Suspense>
          </SafeAreaView>
        </NavigationContainer>
    </>
  );
};

export default App;
