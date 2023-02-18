import UserInfo from './UserInfo';
import { Box } from '@mui/material';
import DashboardLinkItem from './DashboardItem';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <Box
    sx={{ backgroundColor: 'secondary.main' }}
    display='flex'
    flexDirection='column'
    height='100%'
  >
    <Box p={2}>
      <UserInfo />
    </Box>
    <Box py={5}>
      <DashboardLinkItem name={'Dashboard'} href={'/admin'} />
      <DashboardLinkItem name={'Products'} href={'/admin/products'} />
      <DashboardLinkItem name={'Orders'} href={'/admin/orders'} />
    </Box>
    <Box display='flex' flex={1} p={2} justifyContent='center'>
      <Link to='/' style={{ padding: 2, color: 'white', alignSelf: 'flex-end' }}>
        Home
      </Link>
    </Box>
  </Box>
);

export default Dashboard;
