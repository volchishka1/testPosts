import { ThunkActionResult } from '../types/action';
import { saveData } from '@root/store/actions.ts';

export const getData =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://my-json-server.typicode.com/volchishka1/testPosts/posts`;
    api.get(apiUrl).then((response) => {
      dispatch(saveData(response.data));
    });
  };

export const postData =
  (id: number, title: string, body: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://my-json-server.typicode.com/volchishka1/testPosts/db/posts/${id}`;
    const request = await api.post(apiUrl, {
      body: body,
      title: title,
    });
    if (request.status === 200) {
      dispatch(getData());
    }
  };
