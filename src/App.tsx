import 'react-native-gesture-handler';

import React, { Suspense } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import { QueryClient, QueryClientProvider } from 'react-query';

import { AppColors } from './styles/global';

const client = new QueryClient();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <QueryClientProvider client={client}>
          <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.GRAY }}>
            <Routes />
          </SafeAreaView>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
