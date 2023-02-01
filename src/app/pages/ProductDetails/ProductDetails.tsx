import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { fetchAllProducts } from '../../store/products/products.action';
import { ProductState } from '../../store/products/productsSlice';
import { AppDispatch } from '../../store/store';

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams<{ id: string }>();

  const { products, loading, error } = useSelector(ProductState);
  const productSelected = products.find(product => product.id === id);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  // TODO: Loading Component.
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO: Not found page for products
    return <Navigate to='/not-found-product' />;
  }

  return (
    <Container>
      <h1>{productSelected?.title}</h1>
    </Container>
  );
};

export default ProductDetails;
