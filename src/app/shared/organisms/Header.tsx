import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Authorized from '../../helpers/Authorized';
import routes from '../../routes/constants/routes.json';
import NavLink from '../atoms/NavLink';
import NavBrand from '../atoms/NavBrand';
import Box from '../../lib/Box';
import CartIcon from '../atoms/icons/CartIcon';
import NotificationIcon from '../atoms/icons/NotificationIcon';
import { Link } from 'react-router-dom';
import Avatar from '../atoms/icons/Avatar';

const settings = ['Profile', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <NavBrand href={routes.home.path}>LOGO</NavBrand>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <NavLink
                to={routes.home.path}
                name={routes.home.name}
                onClick={handleCloseNavMenu}
              />
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
          <NavBrand href={routes.home.path}>LOGO</NavBrand>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={routes.home.path} key={routes.home.name}>
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
            <Authorized when={u => !u.isAuth} key={routes.login.name}>
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
            <CartIcon count={5} />
            <Avatar
              title='Open settings'
              onClick={handleOpenUserMenu}
              alt='Avatar Login'
              imgUrl='/static/images/avatar/2.jpg'
            />
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
