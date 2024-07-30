import React, { FC } from 'react';
import { PostsScreenView } from '@screens/postsScreen/postsScreenView.tsx';
import { ROUTES } from '@constants/routes.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigatorParamList } from '@navigation/types.ts';

export type PostsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<NativeStackNavigatorParamList, ROUTES.POSTS_SCREEN>,
  any
>;

export const PostsScreen: FC<PostsScreenProps> = (props) => {
  const { navigation } = props;

  const navigationToPostScreen = () => {
    navigation.navigate(ROUTES.POST_SCREEN);
  };
  return <PostsScreenView navigationToPostScreen={navigationToPostScreen} />;
};
