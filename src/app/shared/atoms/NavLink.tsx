import React from 'react';
import { MenuItem, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomTheme } from '../../theme';

type Props = {
  to: string;
  name: string;
  onClick: () => void;
};

const NavLink = ({ to, name, onClick }: Props) => {
  const theme = useTheme<CustomTheme>();
  return (
    <Link to={to}>
      <MenuItem key={name} onClick={onClick}>
        <Typography sx={{ color: 'black' }} textAlign='center'>
          {name}
        </Typography>
      </MenuItem>
    </Link>
  );
};

export default NavLink;
