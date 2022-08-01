import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

export const useAuth = () => {
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
