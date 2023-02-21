import { IconButton, ListItem, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartProduct } from '../../../store/cart/cart.model';
import { Product } from '../../../models/product';
import { printPrice } from '../../../helpers/priceUtils';

type CartItemProps = {
  item: CartProduct;
  onIncrement: (item: Product) => void;
  onDecrement: (item: Product) => void;
};

const CartItem = ({ item, onIncrement, onDecrement }: CartItemProps) => {
  return (
    <ListItem aria-label={`CartItem-${item.title}`}>
      <div style={{ marginRight: '30px' }}>
        <img style={{ height: '80px', borderRadius: '5px' }} src={item.imageUrl} alt={item.title} />
      </div>
      <ListItemText primary={item.title} secondary={`x${item.quantity}`} />
      <div style={{ marginRight: '30px', display: 'flex' }}>
        <IconButton sx={{ mr: '1px' }} edge='end' aria-label='+' onClick={() => onIncrement(item)}>
          <AddCircleIcon />
        </IconButton>
        <IconButton edge='end' aria-label='-' onClick={() => onDecrement(item)}>
          <RemoveCircleIcon />
        </IconButton>
      </div>
      <div style={{ marginRight: '1.4rem' }}>
        <span style={{ fontSize: '20px' }}>{printPrice(item.price)}</span>
      </div>
      <IconButton>
        <DeleteIcon color='secondary' />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
