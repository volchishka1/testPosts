import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive, saveData, setBody, setId, setPostData, setTitle } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  title: '',
  body: '',
  id: 0,
  itemData: [],
  setPost: [
    {
      id: 0,
      title: '',
      body: '',
    },
  ],
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(addIsActive, (state, action) => {
      state.isActive = action.payload;
    })
    .addCase(saveData, (state, action) => {
      state.itemData = action.payload;
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
    .addCase(setPostData, (state, action) => {
      state.setPost.push(action.payload);
    });
});
