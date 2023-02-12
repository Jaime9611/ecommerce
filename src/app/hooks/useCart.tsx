import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../models/product';
import { addtoCart, CartState, removeFromCart } from '../store/cart/cartSlice';
import { AppDispatch } from '../store/store';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector(CartState);

  const handleAddToCart = (item: Product) => dispatch(addtoCart(item));
  const handleRemoveFromCart = (item: Product) => dispatch(removeFromCart(item));
  const itemIsOnCart = (product: Product) => {
    return items.find(item => item.title === product.title) ? true : false;
  };

  return { items, handleAddToCart, handleRemoveFromCart, itemIsOnCart };
};
