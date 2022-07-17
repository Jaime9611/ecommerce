import { IUser } from './user';

export interface IAuthState {
  token: string;
  user: IUser;
  loading?: boolean;
}

export interface IAuthContext {
  auth: IAuthState;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
}

export enum ActionType {
  SET_LOADING = 'setLoading',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export type IAuthAction =
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.LOGIN; payload: IAuthState }
  | { type: ActionType.LOGOUT };
