import { FC, MouseEvent, MouseEventHandler } from 'react';

import { Box, Button, Card, CardMedia, Typography } from '@mui/material';

import { Product } from '../../../../models/product';
import { messages } from '../../../../constants/messages';
import { useCart } from '../../../../hooks/useCart';
import { printPrice } from '../../../../helpers/priceUtils';

interface CartItemProps {
  item: Product;
  onClick: () => void;
}

const CardItem: FC<CartItemProps> = ({ item, onClick }) => {
  const { handleAddToCart, handleRemoveFromCart, itemIsOnCart } = useCart();

  const handleClick: MouseEventHandler = e => {
    e.stopPropagation();
    onClick();
  };

  const handleCartBtn = (e: MouseEvent<HTMLButtonElement>, func: (item: Product) => void) => {
    e.stopPropagation();
    func(item);
  };

  return (
    <Card
      sx={{
        maxWidth: 375,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component='img'
        sx={{ objectFit: 'cover' }}
        alt={item.title}
        height='200'
        image={item.imageUrl}
      />
      <Box
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        padding={2}
      >
        <Box>
          <Typography
            gutterBottom
            variant='h5'
            onClick={handleClick}
            sx={{ '&:hover': { cursor: 'pointer', textDecoration: 'underline' } }}
          >
            {item.title.length >= 20 ? item.title.slice(0, 17) + '...' : item.title}
          </Typography>
          <Typography sx={{ mb: '.7rem' }} variant='body2' color='text.secondary'>
            <span>Action - </span>
            <span>Fantasy</span>
          </Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>{printPrice(item.price)}</Typography>
        </Box>
        <Box pt={2}>
          {itemIsOnCart(item) ? (
            <Button
              size='small'
              variant='outlined'
              color='secondary'
              onClick={e => handleCartBtn(e, handleRemoveFromCart)}
            >
              {messages.PRODUCT.removeFromCart}
            </Button>
          ) : (
            <Button
              size='small'
              variant='outlined'
              color='primary'
              onClick={e => handleCartBtn(e, handleAddToCart)}
            >
              {messages.PRODUCT.addToCart}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default CardItem;
