import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import Header from '../shared/organisms/Header';
import Protected from './Protected';

import routes from './constants/routes.json';

const Navigator = () => {
  const { isAdmin, isAuth } = useAuth();

  return (
    <>
      <Header />
      <Routes>
        {/* All */}
        <Route path={routes.home.path} element={<Home />} />
        <Route path='*' element={<div>Not Found</div>} />

        {/* Public Only */}
        <Route element={<Protected redirect='/' hasAccess={!isAuth} />}>
          <Route path={routes.login.path} element={<Login />} />
        </Route>

        {/* Authenticated only */}
        <Route element={<Protected redirect='/' hasAccess={isAuth} />}>
          <Route path='profile' element={<Profile />} />
        </Route>

        {/* Admins Only */}
        <Route element={<Protected redirect='login' hasAccess={isAdmin} />}>
          <Route path={routes.admin.path} element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigator;
