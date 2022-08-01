export type Role = 'USER' | 'ADMIN';

export interface IUser {
  sub: string;
  roles: Role[];
}
