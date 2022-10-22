import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedProps {
  hasAccess: boolean;
  redirect: string;
}

const Protected = ({ hasAccess, redirect }: IProtectedProps) => {
  return <>{hasAccess ? <Outlet /> : <Navigate to={redirect} />}</>;
};

export default Protected;
