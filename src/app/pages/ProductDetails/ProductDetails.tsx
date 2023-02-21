import { Box, Button, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getProductById } from '../../api/products';
import { messages } from '../../constants/messages';
import { printPrice } from '../../helpers/priceUtils';
import { useCart } from '../../hooks/useCart';
import Loading from '../../shared/organisms/Loading/Loading';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { handleRemoveFromCart, handleAddToCart, itemIsOnCart } = useCart();

  const { data, isLoading } = useQuery('product', () => getProductById(id ?? ''));
  const product = data?.data;

  if (isLoading || product === undefined) return <Loading />;

  return (
    <Container sx={{ mt: 6 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='1rem'>
          <Box flex={1}>
            <img
              src={product?.imageUrl}
              alt={product?.title}
              style={{
                width: '180px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </Box>
          <Box>
            <Typography variant='h3' sx={{ mb: 2 }}>
              {product?.title}
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              {product?.description}
            </Typography>
            <Typography variant='subtitle1'>
              Stock: <i style={{ fontWeight: 'bold' }}>{product?.stock}</i>
            </Typography>
            <Typography variant='subtitle1' sx={{ mb: 1 }}>
              Price: <i style={{ fontWeight: 'bold' }}>{printPrice(product?.price)}</i>
            </Typography>
            <Box display='flex' height='100%' justifyContent='flex-end'>
              {itemIsOnCart(product) ? (
                <Button
                  size='large'
                  variant='outlined'
                  color='secondary'
                  onClick={() => handleRemoveFromCart(product)}
                >
                  {messages.PRODUCT.removeFromCart}
                </Button>
              ) : (
                <Button
                  size='large'
                  variant='outlined'
                  color='primary'
                  onClick={() => handleAddToCart(product)}
                >
                  {messages.PRODUCT.addToCart}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
