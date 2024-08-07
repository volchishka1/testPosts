import React, { FC } from 'react';
import { PostScreenViewTypes } from '@screens/postScreen/types.ts';
import { postScreenViewStyles } from '@screens/postScreen/styles.ts';
import { Text, View } from 'react-native';

export const PostScreenView: FC<PostScreenViewTypes> = (props) => {
  const { titleData, bodyData } = props;
  return (
    <View style={postScreenViewStyles.rootContainer}>
      <View style={postScreenViewStyles.postContainer}>
        <Text>{titleData}</Text>
        <Text>{bodyData}</Text>
      </View>
    </View>
  );
};
