import React, {useState} from 'react';
import {Alert} from 'react-native';

import {createUserOnFirebaseAsync} from '~/services/firebaseApi';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  TopView,
  Img,
  BottomView,
  Input,
  Title,
  Button,
} from './styles';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUserAsync() {
    try {
      const user = await createUserOnFirebaseAsync(email, password);
      Alert.alert(
        'User Created',
        `User ${user.email} has succesfuly been created!`,
        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert('Create User Failed!', error.message);
    }
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TopView>
          <Img />
          <Title>Registering new user</Title>
        </TopView>
        <BottomView>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <Button title="Register User" onPress={() => createUserAsync()} />
        </BottomView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
