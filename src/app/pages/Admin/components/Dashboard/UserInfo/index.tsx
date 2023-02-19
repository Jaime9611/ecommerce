import { Avatar, Stack, Typography } from '@mui/material';

const UserInfo = () => (
  <Stack justifyContent='center' alignItems='center' spacing={1}>
    <Avatar
      title='Open settings'
      alt={'Admin User'}
      sx={{ width: 90, height: 90, fontSize: '35px' }}
    >
      JB
    </Avatar>
    <Typography variant='h5' color='white'>
      Admin User
    </Typography>
  </Stack>
);

export default UserInfo;
