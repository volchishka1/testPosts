import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../types/action';

export const addIsActive = createAction(ActionType.ChangeActive, (isActive: boolean) => ({
  payload: isActive,
}));

export const saveData = createAction(ActionType.SaveData, (saveData: any) => ({
  payload: saveData,
}));

export const setTitle = createAction(ActionType.SetTitle, (SetTitle: string) => ({
  payload: SetTitle,
}));

export const setBody = createAction(ActionType.SetBody, (SetBody: string) => ({
  payload: SetBody,
}));

export const setId = createAction(ActionType.SetId, (SetId: number) => ({
  payload: SetId,
}));

export const setPostTitle = createAction(ActionType.SetPostTitle, (SetPostTitle: string) => ({
  payload: SetPostTitle,
}));

export const setPostBody = createAction(ActionType.SetPostBody, (SetPostBody: string) => ({
  payload: SetPostBody,
}));
