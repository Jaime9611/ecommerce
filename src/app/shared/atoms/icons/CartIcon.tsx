import React from 'react';
import { Badge, IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

type Props = {
  count: number;
  onClick: () => void;
};

const CartIcon = (props: Props) => {
  return (
    <IconButton
      size='large'
      aria-label='show 17 new products'
      color='inherit'
      sx={{ mr: 2 }}
      onClick={props.onClick}
    >
      <Badge badgeContent={props.count} color='error'>
        <LocalMallIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
