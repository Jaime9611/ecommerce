import { SerializedError } from '@reduxjs/toolkit';
import { Product } from '../../models/product';

export interface ProductsStore {
  products: Product[];
  loading: boolean;
  error?: SerializedError;
}
