import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {TaskListView} from '~/components/';
import {readTasksFromFirebaseAsync} from '~/services/firebaseApi';

import {Container} from './styles';

const DoneTasks = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  function fetchTasks(tarefas) {
    const tasksToDo = tarefas.filter(t => t.isDone);
    setTasks(tasksToDo);
  }

  useEffect(() => {
    readTasksFromFirebaseAsync(fetchTasks);
  }, []);

  return (
    <Container>
      <TaskListView tasks={tasks} navigation={navigation} />
    </Container>
  );
};

export default DoneTasks;
