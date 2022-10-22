import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import MuiAvatar from '@mui/material/Avatar';

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  alt: string;
  imgUrl: string;
};

const Avatar = (props: Props) => {
  return (
    <Tooltip title={props.title}>
      <IconButton onClick={props.onClick} sx={{ p: 0 }}>
        <MuiAvatar alt={props.alt} src={props.imgUrl} />
      </IconButton>
    </Tooltip>
  );
};

export default Avatar;
