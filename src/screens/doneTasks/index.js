import React, {useState} from 'react';
import {Alert} from 'react-native';

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

const DoneTasks = props => {
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

export default DoneTasks;
