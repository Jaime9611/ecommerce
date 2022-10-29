import { Product } from '../../../api/models/product';
import { messages } from '../../../constants/messages';

type Props = {
  items: Product[];
};

const CartList = ({ items }: Props) => {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map(item => <li key={item.id}>{item.title}</li>)
      ) : (
        <h4>{messages.CART.isEmptyMsg}</h4>
      )}
    </ul>
  );
};

export default CartList;
