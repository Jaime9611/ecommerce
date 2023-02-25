import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import Header from '../shared/organisms/Header/Header';
import Protected from './Protected';

import routes from './constants/routes.json';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

const Navigator = () => {
  const { isAdmin, isAuth } = useAuth();

  return (
    <>
      <Header />
      <Routes>
        {/* All */}
        <Route path={routes.home.path} element={<Home />} />
        <Route path={`${routes.product_details.path}`}>
          <Route path=':id' element={<ProductDetails />} />
        </Route>
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
          <Route path={routes.admin.path} element={<Admin />}>
            <Route path='products' element={<div>Hello products</div>} />
            <Route path='orders' element={<div>Hello orders</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Navigator;
