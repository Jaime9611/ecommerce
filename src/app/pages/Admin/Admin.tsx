import { Box, Grid } from '@mui/material';
import { Dashboard } from './components/Dashboard';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item>
        <Dashboard />
      </Grid>
      <Grid item>
        <Box sx={{ p: 4 }}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Admin;
