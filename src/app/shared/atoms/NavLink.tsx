import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  name: string;
  onClick: () => void;
};

const NavLink = ({ to, name, onClick }: Props) => (
  <Link to={to}>
    <MenuItem key={name} onClick={onClick}>
      <Typography sx={{ color: 'black' }} textAlign='center'>
        {name}
      </Typography>
    </MenuItem>
  </Link>
);

export default NavLink;
