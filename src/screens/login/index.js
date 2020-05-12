import React from 'react';

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
