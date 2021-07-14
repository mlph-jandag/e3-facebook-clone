import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import Logo from '../Logo';
import LoginForm from './LoginForm';
import LoginFooter from './LoginFooter';

const LoginScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={require('../../assets/login-bg.jpg')}
          style={styles.imageBackground}>
          <Logo />
          <LoginForm navigate={navigation.navigate} />
          <LoginFooter />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
