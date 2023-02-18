import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Authorized from '../../../helpers/Authorized';
import routes from '../../../routes/constants/routes.json';
import NavLink from '../../atoms/NavLink';
import NavBrand from '../../atoms/NavBrand';
import Box from '../../../lib/Box';
import CartIcon from '../../atoms/icons/CartIcon';
import NotificationIcon from '../../atoms/icons/NotificationIcon';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Avatar from '../../atoms/icons/Avatar';
import HamburgerMenu from '../../atoms/HamburgerMenu';
import Menu from '../../../lib/Menu';
import SettingsMenu from '../../atoms/SettingsMenu';
import { useAuth } from '../../../hooks/useAuth';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { CartState } from '../../../store/cart/cartSlice';

// TODO: Tests for Nav
const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { items } = useSelector(CartState);
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleCart = (value: boolean) => {
    setIsCartOpen(value);
  };

  const settings = [
    { name: 'Profile', fn: () => console.log('profile') },
    { name: 'Dashboard', fn: () => console.log('dashboard') },
    { name: 'Logout', fn: handleLogout },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (location.pathname.startsWith(routes.admin.path)) {
    return <></>;
  }

  return (
    <AppBar color='secondary' position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <NavBrand displayXs='none' displayMd='flex' to={routes.home.path}>
            ECOM
          </NavBrand>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <HamburgerMenu handleOpen={handleOpenNavMenu} />
            <Menu anchorElNav={anchorElNav} handleClose={handleCloseNavMenu}>
              <NavLink to={routes.home.path} name={routes.home.name} onClick={handleCloseNavMenu} />
              <Authorized
                when={u => u.user?.roles?.includes('ADMIN') && u.isAuth}
                key={routes.admin.name}
              >
                <NavLink
                  to={routes.admin.path}
                  name={routes.admin.name}
                  onClick={handleCloseNavMenu}
                />
              </Authorized>
              <Authorized when={u => !u.isAuth} key={routes.login.name}>
                <NavLink
                  to={routes.login.path}
                  name={routes.login.name}
                  onClick={handleCloseNavMenu}
                />
              </Authorized>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <NavBrand flexGrow={1} displayMd='none' displayXs='flex' to={routes.home.path}>
            Ecom
          </NavBrand>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={routes.home.path}>
              <Button
                key={routes.home.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {routes.home.name}
              </Button>
            </Link>
            <Authorized
              when={u => u.isAuth && u.user?.roles?.includes('ADMIN')}
              key={routes.admin.name}
            >
              <Link to={routes.admin.path}>
                <Button
                  key={routes.admin.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {routes.admin.name}
                </Button>
              </Link>
            </Authorized>
            <Authorized when={u => !u.isAuth}>
              <Link to={routes.login.path}>
                <Button
                  key={routes.login.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {routes.login.name}
                </Button>
              </Link>
            </Authorized>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Authorized when={u => u.user.sub !== '' && u.isAuth}>
              <NotificationIcon count={7} />
            </Authorized>
            <CartIcon count={items.length} onClick={() => toggleCart(true)} />
            <Cart open={isCartOpen} onClose={() => toggleCart(false)} />
            <Authorized when={u => u.isAuth}>
              <Avatar
                title='Open settings'
                onClick={handleOpenUserMenu}
                alt={user.sub?.toUpperCase()}
                imgUrl='/static/images/avatar/2.jpg'
              />
              <SettingsMenu anchorElUser={anchorElUser} handleClose={handleCloseUserMenu}>
                {settings.map(setting => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      handleCloseUserMenu();
                      setting.fn();
                    }}
                  >
                    <Typography textAlign='center'>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </SettingsMenu>
            </Authorized>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
