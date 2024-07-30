import { StyleSheet, ViewStyle } from 'react-native';

export type PostsScreenStyles = {
  rootContainer: ViewStyle;
  createPostContainer: ViewStyle;
  textInputContainer: ViewStyle;
  textInput: ViewStyle;
  postsContainer: ViewStyle;
  postContainer: ViewStyle;
};

export const postsScreenViewStyles = StyleSheet.create<PostsScreenStyles>({
  rootContainer: {
    alignItems: 'center',
  },
  createPostContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    marginVertical: 8,
    flexDirection: 'row',
  },
  textInputContainer: {
    width: 180,
  },
  textInput: {
    width: '100%',
    height: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 2,
  },
  postsContainer: {
    width: '95%',
    marginBottom: 150,
  },
  postContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    marginVertical: 5,
    backgroundColor: '#e5c5f8',
    borderRadius: 5,
  },
});
