import UserInfo from './UserInfo';
import { Box, Drawer, Link } from '@mui/material';
import DashboardLinkItem from './DashboardItem';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 256;

const Dashboard = () => (
  <Drawer
    sx={{
      backgroundColor: 'background.alt',
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant='permanent'
    anchor='left'
  >
    <Box p={4}>
      <UserInfo />
    </Box>
    <Box py={5}>
      <DashboardLinkItem name={'Dashboard'} href={'/admin'} />
      <DashboardLinkItem name={'Products'} href={'/admin/products'} />
      <DashboardLinkItem name={'Orders'} href={'/admin/orders'} />
    </Box>
    <Box display='flex' flex={1} p={2} justifyContent='center'>
      <Link
        component={RouterLink}
        to='/'
        sx={{ padding: 3, alignSelf: 'flex-end', color: 'neutral.dark', textDecoration: 'none' }}
      >
        HOME
      </Link>
    </Box>
  </Drawer>
);

export default Dashboard;
