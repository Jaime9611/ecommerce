import { useDispatch } from 'react-redux';
import { Product } from '../../../../api/models/product';
import { addtoCart } from '../../../../store/cart/cartSlice';
import { AppDispatch } from '../../../../store/store';
import Grid from '@mui/material/Grid';
import CardItem from '../molecules/CardItem';

type CardListProps = {
  data: Product[];
};

const CardList = ({ data }: CardListProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (item: Product) => {
    dispatch(addtoCart(item));
  };

  return (
    <Grid container spacing={2}>
      {data.map(product => (
        <Grid item xs={2} key={product.id}>
          <CardItem item={product} onClick={() => handleClick(product)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
