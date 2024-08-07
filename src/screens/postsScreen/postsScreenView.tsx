import React, { FC } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PostsScreenViewProps } from '@screens/postsScreen/types.ts';
import { CustomButton } from '@root/comoinents/buttonComponent/customButtonComponent.tsx';
import { postsScreenViewStyles } from '@screens/postsScreen/styles.ts';
import { postScreenViewStyles } from '@screens/postScreen/styles.ts';

export const PostsScreenView: FC<PostsScreenViewProps> = (props) => {
  const { setTitle, setBody, addPost, post, setPostData } = props;
  return (
    <View style={postsScreenViewStyles.rootContainer}>
      <View style={postsScreenViewStyles.createPostContainer}>
        <View style={postsScreenViewStyles.textInputContainer}>
          <TextInput style={postsScreenViewStyles.textInput} onChangeText={setTitle} />
          <TextInput style={postsScreenViewStyles.textInput} onChangeText={setBody} />
        </View>
        <CustomButton onPress={addPost} textButton={'Добавить'} />
      </View>
      <View style={postsScreenViewStyles.postsContainer}>
        {post.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setPostData(item.title, item.body);
            }}
            style={postScreenViewStyles.rootContainer}>
            <View style={postScreenViewStyles.postContainer}>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
