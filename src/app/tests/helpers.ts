import { IAuthContext } from '../auth/models/auth';

export const setContext = (isAuth: boolean, isAdmin: boolean): IAuthContext => ({
  auth: {
    token: isAuth ? 'token' : '',
    user: {
      sub: isAuth ? 'John' : '',
      roles: [isAuth ? (isAdmin ? 'ADMIN' : 'USER') : 'USER'],
    },
  },
  login: jest.fn(),
  logout: jest.fn(),
});
