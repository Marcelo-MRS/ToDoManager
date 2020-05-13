import React, {useEffect} from 'react';

import {CommonActions} from '@react-navigation/native';

import {currentFirebaseUser} from '~/services/firebaseApi';

import {Container, Loading} from './styles';

const App = ({navigation}) => {
  useEffect(() => {
    async function checkLoginStatus() {
      const resetNavigation = CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
      const user = await currentFirebaseUser();
      try {
        if (user) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'TaskList'}],
            }),
          );
        }
        navigation.dispatch(resetNavigation);
      } catch (error) {
        navigation.dispatch(resetNavigation);
      }
    }

    checkLoginStatus();
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
};

export default App;
