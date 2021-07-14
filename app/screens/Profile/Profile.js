import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../utils/colors';
import images from '../../utils/images';
import ProfileControl from './ProfileControl';
import ProfileDetails from './ProfileDetails';

const Profile = ({navigation, route}) => {
  const {user, name, livesIn, from, study} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <Image
          source={require('../../assets/cover.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.profile}>
        <View style={styles.profileContainer}>
          <Image source={images(user)} style={styles.avatar} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <ProfileControl user={user} />
        <ProfileDetails details={{livesIn, from, study}} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 10,
    backgroundColor: colors.white,
  },
  profile: {
    padding: 10,
    justifyContent: 'flex-start',
    paddingTop: 100,
    alignItems: 'center',
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderColor: colors.white,
    borderWidth: 5,
    borderRadius: 100,
    marginLeft: 8,
    overflow: 'hidden',
  },
  avatar: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  timelineContainer: {
    marginTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  image: {
    position: 'absolute',
    alignSelf: 'flex-start',
    width: '100%',
    maxHeight: '40%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
