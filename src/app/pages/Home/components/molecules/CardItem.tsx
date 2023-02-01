import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { messages } from '../../../../constants/messages';
import { Product } from '../../../../models/product';

type Props = {
  item: Product;
  isOnCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
};

const CardItem = ({ item, isOnCart, onAddToCart, onRemoveFromCart }: Props) => {
  return (
    <Card sx={{ maxWidth: 375 }}>
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
        {isOnCart ? (
          <Button size='small' variant='outlined' color='error' onClick={onRemoveFromCart}>
            {messages.PRODUCT.removeFromCart}
          </Button>
        ) : (
          <Button size='small' variant='outlined' color='secondary' onClick={onAddToCart}>
            {messages.PRODUCT.addToCart}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardItem;
