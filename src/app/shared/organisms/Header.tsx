import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import Authorized from '../../helpers/Authorized';
import routes from '../../routes/constants/routes.json';

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
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

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
              <Link to={routes.home.path} key={routes.home.name}>
                <MenuItem key={routes.home.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{routes.home.name}</Typography>
                </MenuItem>
              </Link>
              <Authorized
                when={u => u.user?.roles?.includes('ADMIN') && u.isAuth}
                key={routes.admin.name}
              >
                <Link to={routes.admin.path} key={routes.admin.name}>
                  <MenuItem
                    key={routes.admin.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign='center'>
                      {routes.admin.name}
                    </Typography>
                  </MenuItem>
                </Link>
              </Authorized>
              <Authorized when={u => !u.isAuth} key={routes.login.name}>
                <Link to={routes.login.path} key={routes.login.name}>
                  <MenuItem
                    key={routes.login.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign='center'>
                      {routes.login.name}
                    </Typography>
                  </MenuItem>
                </Link>
              </Authorized>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
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
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
                sx={{ mr: 1 }}
              >
                <Badge badgeContent={2} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Authorized>
            <IconButton
              size='large'
              aria-label='show 17 new products'
              color='inherit'
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={5} color='error'>
                <LocalMallIcon />
              </Badge>
            </IconButton>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
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
