import Drawer from '@mui/material/Drawer';
import { printPrice } from '../../../helpers/priceUtils';

import { useCart } from '../../../hooks/useCart';
import CartList from '../../molecules/CartList/CartList';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart = ({ onClose, open }: CartProps) => {
  const { items, cartTotal, handleIncrementQuantity, handleDecrementQuantity } = useCart();

  return (
    <Drawer open={open} anchor='right' onClose={onClose}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CartList
          items={items}
          onIncrement={handleIncrementQuantity}
          onDecrement={handleDecrementQuantity}
        />

        <p aria-label='Cart Total' style={{ textAlign: 'center', width: '100%' }}>
          <span style={{ fontSize: '35px' }}>Total: </span>
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{printPrice(cartTotal)}</span>
        </p>
      </div>
    </Drawer>
  );
};

export default Cart;
