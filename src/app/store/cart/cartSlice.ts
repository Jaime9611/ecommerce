import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../api/models/product';
import { RootState } from '../store';
import { CartProduct, CartStore } from './cart.model';

const initialState: CartStore = {
  items: [] as CartProduct[],
  cartTotal: 0,
};

const removeItemFromCart = (item: Product, cart: CartProduct[]) =>
  cart.filter(cartItem => cartItem.id !== item.id);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = removeItemFromCart(action.payload, state.items);
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      item && item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item?.quantity === 1) {
        state.items = removeItemFromCart(action.payload, state.items);
      } else {
        item && item.quantity--;
      }
    },
  },
});

export const CartState = (state: RootState) => state.cart;
export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
