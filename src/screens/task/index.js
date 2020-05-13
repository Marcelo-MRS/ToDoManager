import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';

import {writeTaskOnFirebaseAsync} from '~/services/firebaseApi';

import {
  Container,
  Input,
  SwitchContainer,
  SwitchText,
  Switch,
  Button,
} from './styles';

const Task = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [priority, setPriority] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (route.params) {
      const {task} = route.params;
      setIsDone(task.isDone);
      setTitle(task.title);
      setResume(task.resume);
      setPriority(task.priority);
    }
  }, []);

  async function saveTaskAsync() {
    const task = {
      title,
      resume,
      priority,
      isDone,
    };
    try {
      await writeTaskOnFirebaseAsync(task);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro Saving', error.message);
    }
  }

  return (
    <Container>
      <Input placeholder="Title" value={title} onChangeText={setTitle} />
      <Input
        placeholder="Resume"
        value={resume}
        onChangeText={setResume}
        multiline
        numberOfLines={4}
      />
      <SwitchContainer>
        <Switch value={priority} onValueChange={setPriority} />
        <SwitchText>High Priority</SwitchText>
      </SwitchContainer>
      <SwitchContainer>
        <Switch value={isDone} onValueChange={setIsDone} />
        <SwitchText>Is Done?</SwitchText>
      </SwitchContainer>
      <Button title="Save" onPress={() => saveTaskAsync()} />
    </Container>
  );
};

export default Task;
