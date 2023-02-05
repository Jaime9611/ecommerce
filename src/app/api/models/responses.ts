import { ProductApi } from './product';

export interface ApiResponse {
  status: string;
  message: string;
}

export interface ProductResponse extends ApiResponse {
  data: ProductApi;
}

export interface ProductListResponse extends ApiResponse {
  data: ProductApi[];
}
