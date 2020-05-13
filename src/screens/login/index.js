import React, {useState} from 'react';
import {Alert} from 'react-native';

import {CommonActions} from '@react-navigation/native';

import {signInOnFirebaseAsync} from '~/services/firebaseApi';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  TopView,
  Img,
  BottomView,
  Input,
  TextContainer,
  TextRegister,
  Text,
  Button,
} from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signInAsync() {
    try {
      const user = await signInOnFirebaseAsync(email, password);
      // console.tron.log(user.user.email);
      Alert.alert(
        'User Authenticated',
        `User ${user.user.email} has succesfuly been authenticated!`,
      );

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'TaskList'}],
        }),
      );
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TopView>
          <Img />
        </TopView>
        <BottomView>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Sign in" onPress={() => signInAsync()} />
          <TextContainer>
            <Text>Not a member? Let's </Text>
            <TextRegister
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </TextRegister>
          </TextContainer>
        </BottomView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
