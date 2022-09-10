import React from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {
  count: number;
};

const NotificationIcon = (props: Props) => {
  return (
    <IconButton
      size='large'
      aria-label='show 17 new notifications'
      color='inherit'
      sx={{ mr: 1 }}
    >
      <Badge badgeContent={props.count} color='error'>
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationIcon;
