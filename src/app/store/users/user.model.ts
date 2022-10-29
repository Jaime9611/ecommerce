// User Models
export type Role = 'USER' | 'ADMIN';

export interface IUser {
  sub: string;
  roles: Role[];
}

export interface AuthStore {
  token: string;
  user: IUser;
  loading?: boolean;
}

// Auth Models
export interface IAuthContext {
  auth: AuthStore;
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
  | { type: ActionType.LOGIN; payload: AuthStore }
  | { type: ActionType.LOGOUT };
