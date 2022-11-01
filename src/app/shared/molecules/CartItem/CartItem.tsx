import { CartProduct } from '../../../store/cart/cart.model';

type CartItemProps = {
  item: CartProduct;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <li style={{ width: '300px' }}>
      <span>{`x${item.quantity} `}</span>
      <span>{item.title}</span>
      <span>{` $${item.price}`}</span>
    </li>
  );
};

export default CartItem;
