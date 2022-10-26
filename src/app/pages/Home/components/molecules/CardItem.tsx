import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from '../../../../api/models/product';

type Props = {
  item: Product;
  onClick: () => void;
};

const CardItem = ({ item, onClick }: Props) => {
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
        <Button size='small' variant='outlined' color='secondary' onClick={onClick}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
