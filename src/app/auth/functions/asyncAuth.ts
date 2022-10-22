import jwtDecode from 'jwt-decode';
import { Dispatch } from 'react';
import { authenticate } from '../../api/authentication';
import { ActionType, IAuthAction } from '../models/auth';
import { IUser } from '../models/user';

export const asyncAuth = async (
  dispatch: Dispatch<IAuthAction>,
  username: string,
  password: string,
) => {
  dispatch({ type: ActionType.SET_LOADING, payload: true });

  try {
    /* eslint camelcase: ["error", {ignoreDestructuring: true}] */
    const { access_token: accessToken } = await authenticate(username, password);
    const user: IUser = jwtDecode(accessToken) as IUser;

    dispatch({
      type: ActionType.LOGIN,
      payload: { token: accessToken, user },
    });
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  } finally {
    dispatch({ type: ActionType.SET_LOADING, payload: false });
  }
};
