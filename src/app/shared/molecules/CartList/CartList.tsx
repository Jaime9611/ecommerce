import { List } from '@mui/material';
import { messages } from '../../../constants/messages';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from '../CartItem/CartItem';

type Props = {
  items: CartProduct[];
};

const CartList = ({ items }: Props) => {
  return (
    <List dense={false} sx={{ width: '500px', padding: '10px' }}>
      {items.length !== 0 ? (
        items.map(item => <CartItem item={item} key={`Cart-item-${item.id}`} />)
      ) : (
        <h4 style={{ height: '100%', textAlign: 'center', marginTop: '30%' }}>
          {messages.CART.isEmptyMsg}
        </h4>
      )}
    </List>
  );
};

export default CartList;
