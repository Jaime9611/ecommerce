import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  name: string;
  onClick: () => void;
};

const NavLink = ({ to, name, onClick }: Props) => (
  <Link to={to}>
    <MenuItem key={name} sx={{ py: 2, px: 4 }} onClick={onClick}>
      <Typography sx={{ color: 'neutral.main', fontSize: '.8rem' }} textAlign='center'>
        {name}
      </Typography>
    </MenuItem>
  </Link>
);

export default NavLink;
