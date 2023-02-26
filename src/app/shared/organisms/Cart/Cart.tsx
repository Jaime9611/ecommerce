import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';

import { printPrice } from '../../../helpers/printUtils';
import { useCart } from '../../../hooks/useCart';
import CartList from '../../molecules/CartList/CartList';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart = ({ onClose, open }: CartProps) => {
  const { items, cartTotal } = useCart();

  return (
    <Drawer open={open} anchor='right' onClose={onClose}>
      <Box mb={2} pl={1}>
        <IconButton onClick={onClose}>
          <CloseIcon
            sx={{ fontSize: '2em', color: 'neutral.dark', '&:hover': { color: 'primary.main' } }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          maxWidth: '95vw',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <CartList items={items} />

        <p aria-label='Cart Total' style={{ textAlign: 'center', width: '100%' }}>
          <span style={{ fontSize: '35px' }}>Total: </span>
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{printPrice(cartTotal)}</span>
        </p>
      </Box>
    </Drawer>
  );
};

export default Cart;
