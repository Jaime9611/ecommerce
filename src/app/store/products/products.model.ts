import { SerializedError } from '@reduxjs/toolkit';

export interface ProductsStore {
  products: unknown[];
  loading: boolean;
  error?: SerializedError;
}
