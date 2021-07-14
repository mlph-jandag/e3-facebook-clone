import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import globalStyles from '../../utils/styles';

const PostControl = () => {
  return (
    <View style={globalStyles.buttonsContainer}>
      <View style={globalStyles.buttonControl}>
        <Icon
          style={globalStyles.icon}
          name="thumbs-up"
          size={20}
          color={colors.gray}
        />
        <Text>Like</Text>
      </View>
      <View style={globalStyles.buttonControl}>
        <Icon
          style={globalStyles.icon}
          name="comment-o"
          size={20}
          color={colors.gray}
        />
        <Text>Comment</Text>
      </View>
      <View style={globalStyles.buttonControl}>
        <Icon
          style={globalStyles.icon}
          name="mail-forward"
          size={20}
          color={colors.gray}
        />
        <Text>Share</Text>
      </View>
    </View>
  );
};

export default PostControl;
