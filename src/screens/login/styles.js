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
`;

export const TopView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Img = styled.Image.attrs({source: ToDoList})`
  width: 200px;
  height: 200px;
`;
export const BottomView = styled.View`
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 20px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const TextRegister = styled.Text`
  font-weight: bold;
`;
export const Text = styled.Text`
  font-weight: normal;
`;
