import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../auth/AuthProvider';
import { IUser } from '../auth/models/user';
import { AppDispatch } from '../store/store';
import { login } from '../store/users/user.action';
import { logout, UserState } from '../store/users/userSlice';

export type IUseAuth = {
  user: IUser;
  loading: boolean | undefined;
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuth: boolean;
  isAdmin: boolean;
};

// export const useAuth = (): IUseAuth => {
//   const context = useContext(AuthContext);
//   const {
//     auth: { token, user, loading },
//   } = context;

//   const role = user.roles ? user.roles[0] : 'USER';

//   return {
//     user,
//     loading,
//     login: context.login,
//     logout: context.logout,
//     isAuth: token === '' ? false : true,
//     isAdmin: token === '' ? false : role === 'ADMIN',
//   };
// };

export const useAuth = (): IUseAuth => {
  const { token, user, loading } = useSelector(UserState);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (username, password) => dispatch(login({ username, password }));

  const handleLogout = () => dispatch(logout());

  const role = user.roles ? user.roles[0] : 'USER';

  return {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    isAuth: token === '' ? false : true,
    isAdmin: token === '' ? false : role === 'ADMIN',
  };
};
