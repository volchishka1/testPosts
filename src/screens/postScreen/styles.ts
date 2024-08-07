import { StyleSheet, ViewStyle } from 'react-native';

export type PostScreenStyles = {
  rootContainer: ViewStyle;
  postContainer: ViewStyle;
};

export const postScreenViewStyles = StyleSheet.create<PostScreenStyles>({
  rootContainer: {},
  postContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    marginVertical: 5,
    backgroundColor: '#e5c5f8',
    borderRadius: 5,
  },
});
