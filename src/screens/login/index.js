import React, {useEffect, useState, useMemo} from 'react';
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

const Login = props => {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');

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
          <Button
            title="Sign in"
            onPress={() =>
              Alert.alert(`Email: ${email} \nPassword: ${password}`)
            }
          />
          <TextContainer>
            <Text>Not a member? Let's </Text>
            <TextRegister
              onPress={() => {
                props.navigation.navigate('Register');
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
