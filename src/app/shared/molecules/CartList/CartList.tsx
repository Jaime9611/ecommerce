import { Product } from '../../../api/models/product';
import { messages } from '../../../constants/messages';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from '../CartItem/CartItem';

type Props = {
  items: CartProduct[];
  onIncrement: (item: Product) => void;
  onDecrement: (item: Product) => void;
};

const CartList = ({ items, onIncrement, onDecrement }: Props) => {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map(item => (
          <CartItem item={item} key={item.id} onIncrement={onIncrement} onDecrement={onDecrement} />
        ))
      ) : (
        <h4>{messages.CART.isEmptyMsg}</h4>
      )}
    </ul>
  );
};

export default CartList;
