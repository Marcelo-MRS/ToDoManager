import styled from 'styled-components/native';

import ToDoList from '~/assets/TodoList.png';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const TopView = styled.View`
  align-items: center;
  padding: 25px;
  flex: 0.2;
  flex-direction: row;
`;

export const Img = styled.Image.attrs({source: ToDoList})`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20;
  padding: 25px;
`;

export const BottomView = styled.View`
  flex: 1;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Input = styled.TextInput`
  margin-bottom: 20px;
`;

export const Button = styled.Button``;
