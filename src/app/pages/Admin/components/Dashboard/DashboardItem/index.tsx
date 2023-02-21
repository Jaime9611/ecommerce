import { Stack, Typography } from '@mui/material';
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
    px={5}
    py={2}
    sx={{ '&:hover': { bgcolor: 'rgba(0,0,0, .2)', cursor: 'pointer' } }}
    component={RouterLink}
    to={href}
  >
    <Typography variant='h6' sx={{ color: 'neutral.dark' }}>
      {name}
    </Typography>
    <ArrowForwardIosIcon sx={{ color: 'neutral.dark' }} />
  </Stack>
);

export default DashboardLinkItem;
