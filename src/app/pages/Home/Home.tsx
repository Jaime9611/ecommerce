import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@mui/material';

import { AppDispatch } from '../../store/store';
import { fetchAllProducts } from '../../store/products/products.action';
import { ProductState } from '../../store/products/productsSlice';
import CardList from './components/organisms/CardList';
import Loading from '../../shared/organisms/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading } = useSelector(ProductState);

  if (loading) return <Loading />;

  return (
    <Container maxWidth='xl' sx={{ mt: 3 }}>
      <CardList data={products} />
    </Container>
  );
};

export default Home;
