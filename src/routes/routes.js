import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register} from '~/screens/screens';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
export default Routes;
