import { Product } from '../../../../api/models/product';

type Props = {
  item: Product;
};

const CardItem = ({ item }: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export default CardItem;
