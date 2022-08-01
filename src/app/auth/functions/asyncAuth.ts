import jwtDecode from 'jwt-decode';
import { Dispatch } from 'react';
import { authenticate } from '../../api/authentication';
import { ActionType, IAuthAction } from '../models/auth';
import { IUser } from '../models/user';

export const asyncAuth = async (
  dispatch: Dispatch<IAuthAction>,
  username: string,
  password: string
) => {
  dispatch({ type: ActionType.SET_LOADING, payload: true });

  try {
    const { access_token } = await authenticate(username, password);
    const user: IUser = jwtDecode(access_token) as IUser;

    dispatch({
      type: ActionType.LOGIN,
      payload: { token: access_token, user },
    });
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  } finally {
    dispatch({ type: ActionType.SET_LOADING, payload: false });
  }
};
