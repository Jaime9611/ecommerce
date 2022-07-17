import { SerializedError } from '@reduxjs/toolkit';

export interface ProductsStore {
  products: any[];
  loading: boolean;
  error?: SerializedError;
}
