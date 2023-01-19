import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../api/models/product';
import { CartState, decrementQuantity, incrementQuantity } from '../../../store/cart/cartSlice';
import { AppDispatch } from '../../../store/store';
import CartList from '../../molecules/CartList/CartList';

type CartProps = {
  open: boolean;
  onClose: () => void;
};

// TODO: Make test for this component
const Cart = ({ onClose, open }: CartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector(CartState);

  const handleIncrementQuantity = (item: Product) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrementQuantity = (item: Product) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <Drawer open={open} anchor='right' onClose={onClose}>
      <CartList
        items={items}
        onIncrement={handleIncrementQuantity}
        onDecrement={handleDecrementQuantity}
      />
    </Drawer>
  );
};

export default Cart;
