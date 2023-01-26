import { IconButton, ListItem, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Product } from '../../../api/models/product';
import { CartProduct } from '../../../store/cart/cart.model';

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
        <IconButton edge='end' aria-label='+' onClick={() => onIncrement(item)}>
          <AddCircleIcon />
        </IconButton>
        <IconButton edge='end' aria-label='-' onClick={() => onDecrement(item)}>
          <RemoveCircleIcon />
        </IconButton>
      </div>
      <div>
        <span style={{ fontSize: '20px' }}>{`$${item.price}`}</span>
      </div>
    </ListItem>
  );
  //   <li style={{ width: '300px' }} >
  //     <span>{`x${item.quantity} `}</span>
  //     <span>{item.title}</span>
  //     <span>{` $${item.price}`}</span>
  //     <span>
  //       <button onClick={() => onIncrement(item)}>+</button>
  //     </span>
  //     <span>
  //       <button onClick={() => onDecrement(item)}>-</button>
  //     </span>
  //   </li>
  // );
};

export default CartItem;
