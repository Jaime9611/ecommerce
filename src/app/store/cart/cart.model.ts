import { Product } from '../../models/product';

export interface CartStore {
  items: CartProduct[];
  cartTotal: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
