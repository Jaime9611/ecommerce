import { Grid } from '@mui/material';
import { Dashboard } from './components/Dashboard';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={2}>
        <Dashboard />
      </Grid>
      <Grid>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Admin;
