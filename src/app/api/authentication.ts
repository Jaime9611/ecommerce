import { LOCAL_HOST } from '../constants/paths';
import { AuthResponse } from './models/auth';

const authPath = `${LOCAL_HOST}/auth/login`;

export const authenticate = async (username: string, password: string) => {
  const response = await fetch(authPath, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  return (await response.json()) as AuthResponse;
};
