import { Menu } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  anchorElUser: HTMLElement | null;
  handleClose: () => void;
};

const SettingsMenu = ({ children, anchorElUser, handleClose }: Props) => {
  return (
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
      onClose={handleClose}
    >
      {children}
    </Menu>
  );
};

export default SettingsMenu;
