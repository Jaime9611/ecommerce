import React from 'react';
import MuiBox from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

type Props = {
  sx?: SxProps<Theme> | undefined;
  children?: React.ReactNode;
};

const Box = ({ sx, children }: Props) => {
  return <MuiBox sx={sx}>{children}</MuiBox>;
};

export default Box;
