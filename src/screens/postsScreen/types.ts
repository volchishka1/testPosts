import { TextInputProps, TouchableOpacityProps } from 'react-native';

export type PostsScreenViewProps = {
  navigationToPostScreen: TouchableOpacityProps['onPress'];
  addPost: TouchableOpacityProps['onPress'];
  setTitle: TextInputProps['onChangeText'];
  setBody: TextInputProps['onChangeText'];
  post: TextInputProps['children'];
};
