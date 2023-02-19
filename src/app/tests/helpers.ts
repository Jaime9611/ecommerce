import { Role } from '../store/users/user.model';

export const setContext = (isAuth: boolean, isAdmin: boolean) => ({
  token: isAuth ? 'token' : '',
  user: {
    sub: isAuth ? 'John' : '',
    roles: [isAuth ? (isAdmin ? 'ADMIN' : 'USER') : 'USER'] as Role[],
  },
  loading: false,
  mode: 'dark',
  _persist: {} as {
    version: number;
    rehydrated: boolean;
  },
});
