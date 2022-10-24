import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartProduct, CartStore } from './cart.model';

const initialState: CartStore = {
  items: [] as CartProduct[],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const CartState = (state: RootState) => state.cart;
export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
