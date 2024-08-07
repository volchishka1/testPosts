import { NameSpace, RootState } from '../root-reducer';

export const getIsActive = (state: RootState): boolean => state[NameSpace.homeScreen].isActive;
export const getLoadData = (state: RootState) => state[NameSpace.homeScreen].itemData;
export const getTitle = (state: RootState) => state[NameSpace.homeScreen].title;
export const getBody = (state: RootState) => state[NameSpace.homeScreen].body;
export const getId = (state: RootState) => state[NameSpace.homeScreen].id;
export const getPostTitle = (state: RootState) => state[NameSpace.homeScreen].postTitle;
export const getPostBody = (state: RootState) => state[NameSpace.homeScreen].postBody;
