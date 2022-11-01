import { messages } from '../../../constants/messages';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from '../CartItem/CartItem';

type Props = {
  items: CartProduct[];
};

const CartList = ({ items }: Props) => {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map(item => <CartItem item={item} key={item.id} />)
      ) : (
        <h4>{messages.CART.isEmptyMsg}</h4>
      )}
    </ul>
  );
};

export default CartList;
