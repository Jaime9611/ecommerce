import { ReactNode } from 'react';
import { IUser } from '../auth/models/user';
import { useAuth } from '../hooks/useAuth';

interface IProps {
  when: (user: any) => boolean;
  children: ReactNode;
}

const Authorized = ({ when, children, ...restProps }: IProps) => {
  return Boolean(when(useAuth())) ? <>{children}</> : <></>;
};

export default Authorized;
