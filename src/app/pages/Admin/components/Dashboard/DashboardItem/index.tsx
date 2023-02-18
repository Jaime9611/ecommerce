import { Link, Stack } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface DashboardItemProps {
  name: string;
  href: string;
}

const DashboardLinkItem: FC<DashboardItemProps> = ({ name, href }) => (
  <Stack
    justifyContent='space-between'
    alignItems='center'
    direction='row'
    pl={4}
    pr={5}
    sx={{ '&:hover': { bgcolor: 'rgba(0,0,0, .2)', cursor: 'pointer' } }}
    component={RouterLink}
    to={href}
  >
    <p style={{ color: 'white' }}>{name}</p>
    <ArrowForwardIosIcon sx={{ color: 'white' }} />
  </Stack>
);

export default DashboardLinkItem;
