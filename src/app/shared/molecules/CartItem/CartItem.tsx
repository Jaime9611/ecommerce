import { Product } from '../../../api/models/product';
import { CartProduct } from '../../../store/cart/cart.model';

type CartItemProps = {
  item: CartProduct;
  onIncrement: (item: Product) => void;
  onDecrement: (item: Product) => void;
};

const CartItem = ({ item, onIncrement, onDecrement }: CartItemProps) => {
  return (
    <li style={{ width: '300px' }}>
      <span>{`x${item.quantity} `}</span>
      <span>{item.title}</span>
      <span>{` $${item.price}`}</span>
      <span>
        <button onClick={() => onIncrement(item)}>+</button>
      </span>
      <span>
        <button onClick={() => onDecrement(item)}>-</button>
      </span>
    </li>
  );
};

export default CartItem;
