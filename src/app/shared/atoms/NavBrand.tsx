import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  children: string;
  displayXs?: string;
  displayMd?: string;
  flexGrow?: number;
  to: string;
};

const NavBrand = (props: Props) => {
  return (
    <Typography
      variant='h3'
      noWrap
      component={Link}
      to={props.to}
      sx={{
        mr: 2,
        display: { xs: props.displayXs, md: props.displayMd },
        flexGrow: props.flexGrow,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'primary.dark',
        textDecoration: 'none',
      }}
    >
      {props.children}
    </Typography>
  );
};

export default NavBrand;
