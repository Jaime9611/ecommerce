import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchAllProducts } from './products.action';
import { ProductsStore } from './products.model';

const initialState: ProductsStore = {
  products: [],
  loading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const ProductState = (state: RootState) => state.products;
export default productSlice.reducer;
