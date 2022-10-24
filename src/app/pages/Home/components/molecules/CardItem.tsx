import { Product } from '../../../../api/models/product';

type Props = {
  item: Product;
  onClick: () => void;
};

const CardItem = ({ item, onClick }: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  );
};

export default CardItem;
