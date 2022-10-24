import { useDispatch } from 'react-redux';
import { Product } from '../../../../api/models/product';
import { addtoCart } from '../../../../store/cart/cartSlice';
import { AppDispatch } from '../../../../store/store';
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
    <>
      {data.map(product => (
        <CardItem key={product.id} item={product} onClick={() => handleClick(product)} />
      ))}
    </>
  );
};

export default CardList;
