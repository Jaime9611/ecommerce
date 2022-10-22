import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
  const { data } = await getAllProducts();
  return data;
});
