import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import colors from '../../utils/colors';
import NewPost from './NewPost';
import Post from './Post';
import data from '../../utils/data';

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState(data);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <NewPost navigation={navigation} />
        <ScrollView>
          <View onStartShouldSetResponder={() => true}>
            {posts.map((post, index) => {
              return (
                <Post
                  key={index}
                  userPost={post}
                  navigate={navigation.navigate}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});
