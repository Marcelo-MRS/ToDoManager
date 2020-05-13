import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <Button
            title="Register User"
            onPress={() =>
              Alert.alert(`Email: ${email} \nPassword: ${password}`)
            }
          />
        </BottomView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
