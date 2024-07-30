import React, { FC } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { PostsScreenViewProps } from '@screens/postsScreen/types.ts';
import { CustomButton } from '@root/comoinents/buttonComponent/customButtonComponent.tsx';
import { postsScreenViewStyles } from '@screens/postsScreen/styles.ts';

export const PostsScreenView: FC<PostsScreenViewProps> = (props) => {
  const { navigationToPostScreen, setTitle, setBody, addPost, post } = props;
  return (
    <View>
      <View style={postsScreenViewStyles.createPostContainer}>
        <View style={postsScreenViewStyles.textInputContainer}>
          <TextInput style={postsScreenViewStyles.textInput} onChangeText={setTitle} />
          <TextInput style={postsScreenViewStyles.textInput} onChangeText={setBody} />
        </View>
        <CustomButton onPress={addPost} textButton={'Добавить'} />
      </View>
      <FlatList
        style={postsScreenViewStyles.postsContainer}
        data={post}
        renderItem={({ item }) => (
          <View style={postsScreenViewStyles.postContainer}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};
