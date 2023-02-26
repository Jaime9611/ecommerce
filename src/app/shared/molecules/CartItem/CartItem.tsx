import { Box, IconButton, ListItem, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import { CartProduct } from '../../../store/cart/cart.model';
import { printPrice, printShortTitle } from '../../../helpers/printUtils';
import { useCart } from '../../../hooks/useCart';

type CartItemProps = {
  item: CartProduct;
};

const CartItem = ({ item }: CartItemProps) => {
  const { handleIncrementQuantity, handleDecrementQuantity, handleRemoveFromCart } = useCart();

  return (
    <ListItem aria-label={`CartItem-${item.title}`} sx={{ width: '100%' }}>
      <Box sx={{ mr: '1.5rem' }}>
        <img
          style={{ height: '5rem', width: '5rem', borderRadius: '.3rem', objectFit: 'cover' }}
          src={item.imageUrl}
          alt={item.title}
        />
      </Box>
      <Box width='10rem' display='flex' alignItems='center' mr={2}>
        <ListItemText primary={printShortTitle(item.title, 20)} secondary={`x${item.quantity}`} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box>
          <IconButton
            sx={{ mr: '.13rem' }}
            edge='end'
            aria-label='+'
            onClick={() => handleIncrementQuantity(item)}
          >
            <AddCircleIcon />
          </IconButton>
          <IconButton edge='end' aria-label='-' onClick={() => handleDecrementQuantity(item)}>
            <RemoveCircleIcon />
          </IconButton>
        </Box>
        <Box>
          <span style={{ fontSize: '20px' }}>{printPrice(item.price)}</span>
        </Box>
        <IconButton edge='end' onClick={() => handleRemoveFromCart(item)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default CartItem;
