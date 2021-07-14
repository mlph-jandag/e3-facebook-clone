import React, {useState} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  TextInput,
  Dimensions,
  Button,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../../utils/colors';

const LoginForm = ({navigate}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Make sure input is not blank and correct', [
        {
          text: 'Ok',
          onPress: () => {
            setEmail('');
            setPassword('');
            Keyboard.dismiss();
          },
        },
      ]);
    } else {
      Alert.alert('Login Successful', `Welcome back ${email}`, [
        {
          text: 'Ok',
          onPress: () => {
            setEmail('');
            setPassword('');
            Keyboard.dismiss();
          },
        },
      ]);
      navigate('Home', {email: 'email'});
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={loginHandler}>
        {/* <Button color="#223b73" title="Log In"  /> */}
        <Text style={styles.loginButton}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    bottom: 60,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: colors.white,
    width: Dimensions.get('window').width - 30,
    borderRadius: 3,
    marginTop: 20,
    paddingVertical: 5,
    borderColor: colors.white,
    paddingHorizontal: 16,
  },
  loginButton: {
    marginTop: 20,
    textTransform: 'none',
    backgroundColor: colors.primary,
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
    color: colors.white,
    fontWeight: '700',
    borderRadius: 2,
  },
});
