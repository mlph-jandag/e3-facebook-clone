import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';

const ProfileDetails = ({details}) => {
  const {livesIn, from, study} = details;

  return (
    <View style={styles.aboutcontainer}>
      <View style={styles.iconsContainer}>
        <Icon
          style={styles.icon}
          name="graduation-cap"
          size={20}
          color={colors.darkgrey}
        />
        <Icon
          style={styles.icon}
          name="home"
          size={20}
          color={colors.darkgrey}
        />
        <Icon
          style={styles.icon}
          name="map-marker"
          size={20}
          color={colors.darkgrey}
        />
      </View>
      <View style={styles.detailsPanel}>
        <Text>
          Studies <Text style={styles.text}>{study}</Text>
        </Text>
        <Text>
          Lives in <Text style={styles.text}>{livesIn}</Text>
        </Text>
        <Text>
          From <Text style={styles.text}>{from}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 2,
  },
  aboutcontainer: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    paddingTop: 20,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: '900',
  },
  detailsPanel: {
    justifyContent: 'space-evenly',
    flex: 15,
  },
});
