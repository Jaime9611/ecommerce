import { createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { authenticate } from '../../api/authentication';
import { IUser } from './user.model';

type AuthData = {
  username: string;
  password: string;
};

export const login = createAsyncThunk('user/login', async ({ username, password }: AuthData) => {
  try {
    /* eslint camelcase: ["error", {ignoreDestructuring: true}] */
    const { access_token: accessToken } = await authenticate(username, password);
    const user: IUser = jwtDecode(accessToken) as IUser;

    return { token: accessToken, user };
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
});
