import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { asyncAuth } from './functions/asyncAuth';
import authReducer from './functions/authReducer';
import { ActionType, IAuthContext, IAuthState } from './models/auth';
import { IUser } from './models/user';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const [user, setUser] = useLocalStorage('user', {} as IUser);

  const [auth, dispatch] = useReducer(authReducer, {
    token,
    user,
  } as IAuthState);

  const value: IAuthContext = {
    auth,
    login: async (username, password) => await asyncAuth(dispatch, username, password),
    logout: () => dispatch({ type: ActionType.LOGOUT }),
  };

  useEffect(() => {
    setToken(auth.token ?? '');
    setUser(auth.user ?? {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
