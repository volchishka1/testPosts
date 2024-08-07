import React, { FC, useEffect, useState } from 'react';
import { PostsScreenView } from '@screens/postsScreen/postsScreenView.tsx';
import { ROUTES } from '@constants/routes.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigatorParamList } from '@navigation/types.ts';
import { useDispatch } from 'react-redux';
import { saveData, setBody, setPostBody, setPostTitle, setTitle } from '@root/store/actions.ts';
import { useAppSelector } from '@root/hooks/hooks.ts';
import { getBody, getLoadData, getTitle } from '@root/store/homeScreen/selectors.ts';
// import { getData, postData } from '@root/store/api-actions.ts';

export type PostsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<NativeStackNavigatorParamList, ROUTES.POSTS_SCREEN>,
  any
>;

export type ItemData = {
  id: number;
  title: string;
  body: string;
};

export const PostsScreen: FC<PostsScreenProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const getTitleData = useAppSelector(getTitle);
  const getBodyData = useAppSelector(getBody);
  const loadData: ItemData[] = useAppSelector(getLoadData);
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

  const setPostData = (title: string, body: string) => {
    dispatch(setPostTitle(title));
    dispatch(setPostBody(body));
    navigationToPostScreen();
  };

  useEffect(() => {
    // dispatch(getData());
    const posts = loadData.map((item) => {
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
  }, [loadData]);

  const setTitleData = (title: string) => {
    dispatch(setTitle(title));
  };
  const setBodyData = (body: string) => {
    dispatch(setBody(body));
  };

  const addPost = () => {
    dispatch(
      saveData({
        id: 1 + Math.max(0, ...post.map((n) => n.id)),
        title: getTitleData,
        body: getBodyData,
      }),
      // postData(1 + Math.max(0, ...post.map((n) => n.id)), getTitleData, getBodyData),
    );
  };

  return (
    <PostsScreenView
      setTitle={setTitleData}
      setBody={setBodyData}
      addPost={addPost}
      post={post}
      setPostData={setPostData}
    />
  );
};
