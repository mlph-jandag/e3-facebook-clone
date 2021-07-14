import React from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../assets/facebook-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'cover',
    width: 200,
    height: 70,
    alignSelf: 'center',
    marginTop: '30%',
    marginBottom: '10%',
  },
});
