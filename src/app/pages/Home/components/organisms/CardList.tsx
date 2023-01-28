import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../../api/models/product';
import { addtoCart, CartState, removeFromCart } from '../../../../store/cart/cartSlice';
import { AppDispatch } from '../../../../store/store';
import Grid from '@mui/material/Grid';
import CardItem from '../molecules/CardItem';

type CardListProps = {
  data: Product[];
};

const CardList = ({ data }: CardListProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector(CartState);

  const handleAddToCart = (item: Product) => {
    dispatch(addtoCart(item));
  };

  const handleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item));
  };

  const findProductOnCart = (product: Product) => {
    return items.find(item => item.title === product.title) ? true : false;
  };

  return (
    <Grid container spacing={2}>
      {data.map(product => (
        <Grid item xs={2} key={product.id}>
          <CardItem
            item={product}
            isOnCart={findProductOnCart(product)}
            onRemoveFromCart={() => handleRemoveFromCart(product)}
            onAddToCart={() => handleAddToCart(product)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
