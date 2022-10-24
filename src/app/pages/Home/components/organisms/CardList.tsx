import { Product } from '../../../../api/models/product';
import CardItem from '../molecules/CardItem';

type CardListProps = {
  data: Product[];
};

const CardList = ({ data }: CardListProps) => {
  return (
    <>
      {data.map(product => (
        <CardItem key={product.id} item={product} />
      ))}
    </>
  );
};

export default CardList;
