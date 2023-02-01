import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../models/product';
import { CartState, decrementQuantity, incrementQuantity } from '../../../store/cart/cartSlice';
import { AppDispatch } from '../../../store/store';
import CartList from '../../molecules/CartList/CartList';

type CartProps = {
  open: boolean;
  onClose: () => void;
};

const Cart = ({ onClose, open }: CartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, cartTotal } = useSelector(CartState);

  const handleIncrementQuantity = (item: Product) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrementQuantity = (item: Product) => {
    dispatch(decrementQuantity(item));
  };

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
          <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{`$${cartTotal}`}</span>
        </p>
      </div>
    </Drawer>
  );
};

export default Cart;
