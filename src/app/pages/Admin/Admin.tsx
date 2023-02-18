import { Container, Grid } from '@mui/material';
import { Dashboard } from './components/Dashboard';
import { Box } from '@mui/system';
import { Outlet, Route, Routes } from 'react-router-dom';

import routes from '../../routes/constants/routes.json';

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
