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
  Title,
  Button,
} from './styles';

const Register = () => {
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
          />
          <Input placeholder="Password" secureTextEntry />
          <Button title="Register User" onPress={() => Alert.alert('Email')} />
        </BottomView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
