import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../utils/colors';
import {CommonActions} from '@react-navigation/native';
import globalStyles from '../../utils/styles';

const NewPost = ({navigation}) => {
  const [post, setPost] = useState('');
  const profileImage = require('../../assets/profile.jpg');
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Profile', {
            user: 'user',
            name: 'Megumi Fushiguro',
            livesIn: 'Tagaytay, Cavite',
            from: 'Mandaluyong, Pasig',
            study: 'Mechanical Engineering',
          })
        }>
        <Image source={profileImage} style={globalStyles.avatar} />
      </TouchableWithoutFeedback>
      <TextInput
        style={styles.newPost}
        value={post}
        onChangeText={setPost}
        placeholder="What's on your mind?"
      />
      <TouchableOpacity>
        <Text style={styles.loginButton}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderTopWidth: 4,
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 15,
  },
  avatar: {
    flex: 1,
    resizeMode: 'cover',
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  newPost: {
    flex: 4,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
    paddingStart: 10,
    marginStart: 10,
  },
  loginButton: {
    padding: 10,
    color: colors.primary,
    alignSelf: 'center',
    top: 5,
  },
});
