import { useDispatch, useSelector } from 'react-redux';

import {
  addtoCart,
  CartState,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/cart/cartSlice';
import { AppDispatch } from '../store/store';

import { Product } from '../models/product';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, cartTotal } = useSelector(CartState);

  const handleAddToCart = (item: Product) => dispatch(addtoCart(item));
  const handleRemoveFromCart = (item: Product) => dispatch(removeFromCart(item));
  const handleIncrementQuantity = (item: Product) => dispatch(incrementQuantity(item));
  const handleDecrementQuantity = (item: Product) => dispatch(decrementQuantity(item));
  const itemIsOnCart = (product: Product) => {
    return items.find(item => item.title === product.title) ? true : false;
  };

  return {
    items,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
    itemIsOnCart,
    cartTotal,
  };
};
