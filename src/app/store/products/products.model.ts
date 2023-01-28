import { SerializedError } from '@reduxjs/toolkit';
import { Product } from '../../api/models/product';

export interface ProductsStore {
  products: Product[];
  loading: boolean;
  error?: SerializedError;
}
