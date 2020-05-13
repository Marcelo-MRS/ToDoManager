import React from 'react';
import {Alert} from 'react-native';

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

const Login = () => {
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
          />
          <Input placeholder="Password" secureTextEntry />
          <Button title="Sign in" onPress={() => Alert.alert('Email')} />
          <TextContainer>
            <Text>Not a member? Let's </Text>
            <TextRegister>Register</TextRegister>
          </TextContainer>
        </BottomView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
