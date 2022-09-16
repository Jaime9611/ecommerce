import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  children: string;
  displayXs?: string;
  displayMd?: string;
  flexGrow?: number;
  href: string;
};

const NavBrand = (props: Props) => {
  return (
    <Typography
      variant='h5'
      noWrap
      component='a'
      href={props.href}
      sx={{
        mr: 2,
        display: { xs: props.displayXs, md: props.displayMd },
        flexGrow: props.flexGrow,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {props.children}
    </Typography>
  );
};

export default NavBrand;
