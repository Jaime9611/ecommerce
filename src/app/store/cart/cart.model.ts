import { Product } from '../../api/models/product';

export interface CartStore {
  items: CartProduct[];
  cartTotal: number;
}

export interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}
