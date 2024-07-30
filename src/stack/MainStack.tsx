import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/routes';
import { PostScreen } from '@screens/postScreen';
import { PostsScreen } from '@screens/postsScreen';

export const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={ROUTES.POSTS_SCREEN} component={PostsScreen} />
      <Stack.Screen name={ROUTES.POST_SCREEN} component={PostScreen} />
    </Stack.Navigator>
  );
};
