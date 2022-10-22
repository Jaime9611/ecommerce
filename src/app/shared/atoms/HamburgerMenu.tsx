import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

type Props = {
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

const HamburgerMenu = ({ handleOpen }: Props) => {
  return (
    <IconButton
      size='large'
      aria-label='account of current user'
      aria-controls='menu-appbar'
      aria-haspopup='true'
      onClick={handleOpen}
      color='inherit'
    >
      <MenuIcon />
    </IconButton>
  );
};

export default HamburgerMenu;
