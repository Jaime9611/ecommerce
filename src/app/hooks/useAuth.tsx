import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { IUser } from '../auth/models/user';

export type IUseAuth = {
  user: IUser;
  loading: boolean | undefined;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuth: boolean;
  isAdmin: boolean;
};

export const useAuth = (): IUseAuth => {
  const context = useContext(AuthContext);
  const {
    auth: { token, user, loading },
  } = context;

  const role = user.roles ? user.roles[0] : 'USER';

  return {
    user,
    loading,
    login: context.login,
    logout: context.logout,
    isAuth: token === '' ? false : true,
    isAdmin: token === '' ? false : role === 'ADMIN',
  };
};
