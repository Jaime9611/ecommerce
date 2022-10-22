import { Product } from './product';

export interface ApiResponse {
  status: string;
  message: string;
}

export interface ProductResponse extends ApiResponse {
  data: Product;
}

export interface ProductListResponse extends ApiResponse {
  data: Product[];
}
