import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import React, { FC } from 'react';

import { customButtonStyles } from './styles';

export type CustomButtonProps = {
  onPress: TouchableOpacityProps['onPress'];
  textButton: TextProps['children'];
  textButtonStyle?: TouchableOpacityProps['style'];
  style?: TouchableOpacityProps['style'];
  isLoad?: TouchableOpacityProps['aria-selected'];
};

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { onPress, textButton, style, textButtonStyle } = props;

  return (
    <TouchableOpacity style={[customButtonStyles.buttonStyle, style]} onPress={onPress}>
      <Text style={[customButtonStyles.textButton, textButtonStyle]}>{textButton}</Text>
    </TouchableOpacity>
  );
};
