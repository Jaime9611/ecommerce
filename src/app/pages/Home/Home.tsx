import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchAllProducts } from '../../store/products/products.action';
import { ProductState } from '../../store/products/productsSlice';
import CardList from './components/organisms/CardList';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products } = useSelector(ProductState);

  return (
    <Container maxWidth='xl' sx={{ mt: 3 }}>
      <CardList data={products} />
    </Container>
  );
};

export default Home;
