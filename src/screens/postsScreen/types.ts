import { TextInputProps, TouchableOpacityProps } from 'react-native';
import { ItemData } from '@screens/postsScreen/index.tsx';

export type PostsScreenViewProps = {
  setPostData: (title: string, body: string) => void;
  addPost: TouchableOpacityProps['onPress'];
  setTitle: TextInputProps['onChangeText'];
  setBody: TextInputProps['onChangeText'];
  post: Array<ItemData>;
};
