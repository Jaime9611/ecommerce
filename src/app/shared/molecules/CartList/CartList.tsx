import { List, Typography } from '@mui/material';
import { messages } from '../../../constants/messages';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from '../CartItem/CartItem';

type Props = {
  items: CartProduct[];
};

const CartList = ({ items }: Props) => {
  return (
    <List dense={false} sx={{ width: '100%', height: '100%', px: 1, overflowY: 'scroll' }}>
      {items.length !== 0 ? (
        items.map(item => <CartItem item={item} key={`Cart-item-${item.id}`} />)
      ) : (
        <Typography
          variant='h4'
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            py: 3,
            px: 1,
          }}
        >
          {messages.CART.isEmptyMsg}
        </Typography>
      )}
    </List>
  );
};

export default CartList;
