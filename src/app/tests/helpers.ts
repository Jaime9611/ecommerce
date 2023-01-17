import { Role } from '../auth/models/user';

export const setContext = (isAuth: boolean, isAdmin: boolean) => ({
  token: isAuth ? 'token' : '',
  user: {
    sub: isAuth ? 'John' : '',
    roles: [isAuth ? (isAdmin ? 'ADMIN' : 'USER') : 'USER'] as Role[],
  },
  loading: false,
});
