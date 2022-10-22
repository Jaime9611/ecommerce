import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchAllProducts } from '../../store/products/products.action';
import CardList from './components/Cards/CardList';
import { ProductState } from '../../store/products/productsSlice';

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
