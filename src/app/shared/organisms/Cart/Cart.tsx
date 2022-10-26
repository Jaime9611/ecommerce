import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';
import { CartState } from '../../../store/cart/cartSlice';
import CartList from '../../molecules/CartList/CartList';

type CartProps = {
  open: boolean;
  onClose: () => void;
};

// TODO: Make test for this component
const Cart = ({ onClose, open }: CartProps) => {
  const { items } = useSelector(CartState);

  return (
    <Drawer open={open} anchor='right' onClose={onClose}>
      <CartList items={items} />
    </Drawer>
  );
};

export default Cart;
