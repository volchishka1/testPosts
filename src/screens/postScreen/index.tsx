import React from 'react';
import { PostScreenView } from '@screens/postScreen/postScreenView.tsx';
import { useAppSelector } from '@root/hooks/hooks.ts';
import { getPostBody, getPostTitle } from '@root/store/homeScreen/selectors.ts';

export const PostScreen = () => {
  const getTitleData = useAppSelector(getPostTitle);
  const getBodyData = useAppSelector(getPostBody);

  return <PostScreenView titleData={getTitleData} bodyData={getBodyData} />;
};
