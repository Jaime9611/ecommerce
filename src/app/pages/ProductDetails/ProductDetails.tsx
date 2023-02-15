import { Box, Button, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/system';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getProductById } from '../../api/products';
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
        <Box display='flex'>
          <Box flex={1} display='flex' flexDirection='column' justifyContent='space-between'>
            <img
              src={product?.imageUrl}
              alt={product?.title}
              style={{
                width: '180px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '5px',
                marginBottom: '13px',
              }}
            />
          </Box>
          <Box p={3}>
            <Typography variant='h3' sx={{ mb: '20px' }}>
              {product?.title}
            </Typography>
            <Typography variant='body1' sx={{ mb: 3 }}>
              {product?.description}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Stock: <i style={{ color: grey[800] }}>{product?.stock}</i>
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Price: $<i style={{ color: grey[800] }}>{product?.price}</i>
            </Typography>
            {itemIsOnCart(product) ? (
              <Button
                size='large'
                sx={{ justifySelf: 'flex-end', alignSelf: 'center' }}
                variant='outlined'
                color='error'
                onClick={() => handleRemoveFromCart(product)}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                size='large'
                sx={{ justifySelf: 'flex-end', alignSelf: 'center' }}
                variant='contained'
                color='secondary'
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
