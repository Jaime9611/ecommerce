import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { login } from '../store/users/user.action';
import { IUser } from '../store/users/user.model';
import { logout, setMode, UserState } from '../store/users/userSlice';

export type IUseAuth = {
  user: IUser;
  loading: boolean | undefined;
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuth: boolean;
  isAdmin: boolean;
  changeTheme: () => void;
};

export const useAuth = (): IUseAuth => {
  const { token, user, loading } = useSelector(UserState);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (username: string, password: string) =>
    dispatch(login({ username, password }));

  const handleLogout = () => dispatch(logout());

  const handleChangeTheme = () => dispatch(setMode());

  const role = user.roles ? user.roles[0] : 'USER';

  return {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
    changeTheme: handleChangeTheme,
    isAuth: token === '' ? false : true,
    isAdmin: token === '' ? false : role === 'ADMIN',
  };
};
