import UserInfo from './UserInfo';
import { Box, Link } from '@mui/material';
import DashboardLinkItem from './DashboardItem';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => (
  <Box
    sx={{ backgroundColor: 'background.alt' }}
    display='flex'
    flexDirection='column'
    height='100%'
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
  </Box>
);

export default Dashboard;
