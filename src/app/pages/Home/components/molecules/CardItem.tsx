import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';
import { messages } from '../../../../constants/messages';
import { useCart } from '../../../../hooks/useCart';
import { Product } from '../../../../models/product';

type Props = {
  item: Product;
  onClick: () => void;
};

const CardItem = ({ item, onClick }: Props) => {
  const { handleAddToCart, handleRemoveFromCart, itemIsOnCart } = useCart();

  const handleClick: MouseEventHandler = e => {
    e.stopPropagation();
    onClick();
  };

  const handleCartBtn = (e, func: (item: Product) => void) => {
    e.stopPropagation();
    func(item);
  };

  return (
    <Card sx={{ maxWidth: 375, '&:hover': { cursor: 'pointer' } }} onClick={handleClick}>
      <CardMedia
        component='img'
        sx={{ objectFit: 'cover' }}
        alt={item.title}
        height='200'
        image={item.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h5'>
          {item.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <span>Action - </span>
          <span>Fantasy</span>
        </Typography>
        <Typography>{item.price}</Typography>
      </CardContent>
      <CardActions>
        {itemIsOnCart(item) ? (
          <Button
            size='small'
            variant='outlined'
            color='error'
            onClick={e => handleCartBtn(e, handleRemoveFromCart)}
          >
            {messages.PRODUCT.removeFromCart}
          </Button>
        ) : (
          <Button
            size='small'
            variant='outlined'
            color='secondary'
            onClick={e => handleCartBtn(e, handleAddToCart)}
          >
            {messages.PRODUCT.addToCart}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardItem;
