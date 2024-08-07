import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import {
  addIsActive,
  saveData,
  setBody,
  setId,
  setPostBody,
  setPostTitle,
  setTitle,
} from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  title: '',
  body: '',
  postTitle: '',
  postBody: '',
  id: 0,
  itemData: [],
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(addIsActive, (state, action) => {
      state.isActive = action.payload;
    })
    .addCase(saveData, (state, action) => {
      state.itemData.push(action.payload);
      // state.itemData = action.payload;
    })
    .addCase(setTitle, (state, action) => {
      state.title = action.payload;
    })
    .addCase(setBody, (state, action) => {
      state.body = action.payload;
    })
    .addCase(setId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(setPostTitle, (state, action) => {
      state.postTitle = action.payload;
    })
    .addCase(setPostBody, (state, action) => {
      state.postBody = action.payload;
    });
});
