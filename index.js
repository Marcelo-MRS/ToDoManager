/**
 * @format
 */

import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from '~/routes/routes';

import '~/config/ReactotronConfig';
import 'react-native-gesture-handler';
import {initializeFirebaseApi} from '~/services/firebaseApi';

import {name as appName} from './app.json';

const wrappedRoutes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => {
  initializeFirebaseApi();
  return wrappedRoutes;
});
