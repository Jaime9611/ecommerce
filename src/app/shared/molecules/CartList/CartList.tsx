import React from 'react';
import { Product } from '../../../api/models/product';

type Props = {
  items: Product[];
};

const CartList = ({ items }: Props) => {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map(item => <li key={item.id}>{item.title}</li>)
      ) : (
        <h4>There are no items in the cart</h4>
      )}
    </ul>
  );
};

export default CartList;
