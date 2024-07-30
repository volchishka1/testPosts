import React, { FC } from 'react';
import { View } from 'react-native';
import { PostsScreenViewProps } from '@screens/postsScreen/types.ts';
import { CustomButton } from '@root/comoinents/buttonComponent/customButtonComponent.tsx';

export const PostsScreenView: FC<PostsScreenViewProps> = (props) => {
  const { navigationToPostScreen } = props;
  return (
    <View>
      <CustomButton onPress={navigationToPostScreen} textButton={'Перейти'} />
    </View>
  );
};
