import { ReactNode } from 'react';
import { IUseAuth, useAuth } from '../hooks/useAuth';

interface IProps {
  when: (user: IUseAuth) => boolean;
  children: ReactNode;
}

const Authorized = ({ when, children }: IProps) => {
  return when(useAuth()) ? <>{children}</> : <></>;
};

export default Authorized;
