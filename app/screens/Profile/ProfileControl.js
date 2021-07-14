import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import globalStyles from '../../utils/styles';

const ProfileControl = ({user}) => {
  return (
    <View style={styles.buttonsContainer}>
      {user !== 'user' ? (
        <>
          <View style={styles.buttonControl}>
            <Icon
              style={styles.icon}
              name="user-plus"
              size={30}
              color={colors.gray}
            />
            <Text>Add</Text>
          </View>
          <View style={styles.buttonControl}>
            <Icon
              style={styles.icon}
              name="comment"
              size={30}
              color={colors.gray}
            />
            <Text>Message</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.buttonControl}>
            <Icon
              style={styles.icon}
              name="plus-circle"
              size={30}
              color={colors.gray}
            />
            <Text>Add Story</Text>
          </View>
          <View style={styles.buttonControl}>
            <Icon
              style={styles.icon}
              name="pencil"
              size={30}
              color={colors.gray}
            />
            <Text>Edit Profile</Text>
          </View>
        </>
      )}
      <View style={styles.buttonControl}>
        <Icon
          style={styles.icon}
          name="ellipsis-h"
          size={25}
          color={colors.gray}
        />
        <Text>More</Text>
      </View>
    </View>
  );
};

export default ProfileControl;

const styles = StyleSheet.create({
  buttonControl: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
