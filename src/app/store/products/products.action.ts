import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const products = await getAllProducts();
    return products;
  }
);
