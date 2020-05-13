import React, {useState} from 'react';
import {Alert} from 'react-native';

import {signInOnFirebaseAsync} from '~/services/firebaseApi';

import {Container, Icon, Img, FloatButton} from './styles';

const ToDoTasks = ({navigation}) => {
  function goToTask() {
    navigation.navigate('Task');
  }

  return (
    <Container>
      <FloatButton onPress={() => goToTask()}>
        <Img />
      </FloatButton>
    </Container>
  );
};

export default ToDoTasks;
