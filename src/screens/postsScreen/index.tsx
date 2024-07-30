import React, { FC, useEffect, useState } from 'react';
import { PostsScreenView } from '@screens/postsScreen/postsScreenView.tsx';
import { ROUTES } from '@constants/routes.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigatorParamList } from '@navigation/types.ts';
import { useDispatch } from 'react-redux';
import { setBody, setPostData, setTitle } from '@root/store/actions.ts';
import { useAppSelector } from '@root/hooks/hooks.ts';
import { getBody, getPostsData, getTitle } from '@root/store/homeScreen/selectors.ts';

export type PostsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<NativeStackNavigatorParamList, ROUTES.POSTS_SCREEN>,
  any
>;

export const PostsScreen: FC<PostsScreenProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const getTitleData = useAppSelector(getTitle);
  const getBodyData = useAppSelector(getBody);
  const getPosts = useAppSelector(getPostsData);
  const [post, setPost] = useState<
    {
      id: number;
      title: string;
      body: string;
    }[]
  >([]);

  const navigationToPostScreen = () => {
    navigation.navigate(ROUTES.POST_SCREEN);
  };

  useEffect(() => {
    const posts = getPosts.map((item) => {
      const title = item.title;
      const body = item.body;
      const id = item.id;
      return {
        title,
        body,
        id,
      };
    });
    setPost(posts);
    console.log(posts);
  }, [getPosts]);

  const setTitleData = (title: string) => {
    dispatch(setTitle(title));
  };
  const setBodyData = (body: string) => {
    dispatch(setBody(body));
  };

  const addPost = () => {
    dispatch(
      setPostData({
        id: 1 + Math.max(0, ...post.map((n) => n.id)),
        title: getTitleData,
        body: getBodyData,
      }),
    );
  };

  return (
    <PostsScreenView
      navigationToPostScreen={navigationToPostScreen}
      setTitle={setTitleData}
      setBody={setBodyData}
      addPost={addPost}
      post={post}
    />
  );
};
