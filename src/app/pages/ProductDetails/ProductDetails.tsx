import { Box, Button, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductById } from '../../api/products';
import { Product } from '../../models/product';
import { addtoCart, CartState, removeFromCart } from '../../store/cart/cartSlice';
import { AppDispatch } from '../../store/store';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({} as Product);
  const [loading, setLoading] = useState(false);

  const { items } = useSelector(CartState);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddtoCart = (item: Product) => {
    dispatch(addtoCart(item));
  };

  const handleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item));
  };

  const findItemOnCart = (product: Product) => {
    return items.find(item => item.title === product.title) ? true : false;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data } = await getProductById(id as string);

      if (data) {
        setLoading(false);
        setProduct(data);
      }
    };

    fetchProduct();
  }, []);

  // TODO: Loading Component.
  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   // TODO: Not found page for products
  //   return <Navigate to='/not-found-product' />;
  // }

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
            {findItemOnCart(product) ? (
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
                onClick={() => handleAddtoCart(product)}
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
