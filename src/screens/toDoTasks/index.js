import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {TaskListView} from '~/components/';
import {readTasksFromFirebaseAsync} from '~/services/firebaseApi';

import {Container, Icon, Img, FloatButton} from './styles';

const ToDoTasks = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = tarefas => {
    const tasksToDo = tarefas.filter(t => !t.isDone);
    setTasks(tasksToDo);
  };

  const goToTask = () => {
    navigation.navigate('Task');
  };
  useEffect(() => {
    readTasksFromFirebaseAsync(fetchTasks);
  }, []);

  return (
    <Container>
      <TaskListView tasks={tasks} navigation={navigation} />
      <FloatButton onPress={() => goToTask()}>
        <Img />
      </FloatButton>
    </Container>
  );
};

export default ToDoTasks;
