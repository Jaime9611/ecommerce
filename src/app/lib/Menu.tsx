import React, { ReactNode } from 'react';
import MuiMenu from '@mui/material/Menu';

type Props = {
  children: ReactNode;
  anchorElNav: HTMLElement | null;
  handleClose: () => void;
};

const Menu = ({ anchorElNav, handleClose, children }: Props) => {
  return (
    <MuiMenu
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
      onClose={handleClose}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {children}
    </MuiMenu>
  );
};

export default Menu;
