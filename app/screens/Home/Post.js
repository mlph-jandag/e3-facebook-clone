import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../utils/colors';
import images from '../../utils/images';
import globalStyles from '../../utils/styles';
import PostControl from './PostControl';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({userPost, navigate}) => {
  const {name, user, livesIn, from, study} = userPost;

  const profileHandler = () => {
    navigate('Profile', {
      user,
      name,
      livesIn,
      from,
      study,
    });
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <TouchableWithoutFeedback onPress={profileHandler}>
          <Image
            style={globalStyles.avatar}
            source={images(user)}
            onPress={profileHandler}
          />
        </TouchableWithoutFeedback>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.title} onPress={profileHandler}>
            {name}
          </Text>
          <View style={styles.subHeader}>
            <Text style={styles.subtitle}>1hr ago</Text>
            <Icon
              style={globalStyles.icon}
              name="globe"
              size={15}
              color={colors.gray}
            />
          </View>
        </View>
      </View>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        possimus quisquam, modi atque, voluptates quis illo voluptate eligendi
        illum quidem nam optio cum veniam molestiae eos, delectus nobis! Vero,
        blanditiis.
      </Text>
      <PostControl />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.gray,
  },
  postHeader: {
    flexDirection: 'row',
    marginTop: 7,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    fontWeight: '200',
    color: 'gray',
    marginRight: 5,
  },
  content: {
    padding: 5,
  },
});
