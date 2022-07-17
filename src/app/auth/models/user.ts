type Role = 'common' | 'admin';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: Role;
}
