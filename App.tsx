import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/config/stack-navigation';
import {Provider} from 'react-redux';
import Store from './src/config/redux/store';

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <StatusBar hidden={false} backgroundColor="#1C2728" />
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer independent={true}>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
}
