import { IconButton, ListItem, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import { CartProduct } from '../../../store/cart/cart.model';
import { printPrice } from '../../../helpers/priceUtils';
import { useCart } from '../../../hooks/useCart';

type CartItemProps = {
  item: CartProduct;
};

const CartItem = ({ item }: CartItemProps) => {
  const { handleIncrementQuantity, handleDecrementQuantity, handleRemoveFromCart } = useCart();

  return (
    <ListItem aria-label={`CartItem-${item.title}`}>
      <div style={{ marginRight: '30px' }}>
        <img style={{ height: '80px', borderRadius: '5px' }} src={item.imageUrl} alt={item.title} />
      </div>
      <ListItemText primary={item.title} secondary={`x${item.quantity}`} />
      <div style={{ marginRight: '30px', display: 'flex' }}>
        <IconButton
          sx={{ mr: '1px' }}
          edge='end'
          aria-label='+'
          onClick={() => handleIncrementQuantity(item)}
        >
          <AddCircleIcon />
        </IconButton>
        <IconButton edge='end' aria-label='-' onClick={() => handleDecrementQuantity(item)}>
          <RemoveCircleIcon />
        </IconButton>
      </div>
      <div style={{ marginRight: '1.4rem' }}>
        <span style={{ fontSize: '20px' }}>{printPrice(item.price)}</span>
      </div>
      <IconButton edge='end' onClick={() => handleRemoveFromCart(item)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
