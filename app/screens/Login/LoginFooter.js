import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import colors from '../../utils/colors';

const LoginFooter = () => {
  const signUpHandler = () => {
    Alert.alert(
      'Sign Up',
      'Start Connecting And Sharing With People You Know. See The Latest From Your Community!',
    );
  };

  const aboutHandler = () => {
    Alert.alert(
      'Help',
      "Need help logging in? Learn what to do if you're having trouble getting back on Facebook. ",
      [
        {
          text: 'Learn more',
        },
      ],
    );
  };

  return (
    <View style={styles.Footer}>
      <TouchableOpacity onPress={signUpHandler}>
        <Text style={styles.link}>Sign Up for Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={aboutHandler}>
        <Text style={styles.help}>?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  Footer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  help: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});
