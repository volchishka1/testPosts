import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from '../stack/MainStack';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
