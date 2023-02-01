import { productsFromApi } from '../adapters/productAdapters';
import { LOCAL_HOST } from '../constants/paths';
import { HttpError } from './errors/error-responses';
import { ProductListResponse } from './models/responses';

const productsPath = `${LOCAL_HOST}/products`;

export const getAllProducts = async () => {
  const response = await fetch(productsPath);
  const data = (await response.json()) as ProductListResponse;

  if (!response.ok) {
    throw new HttpError('Request failed', response.status, data);
  }

  return { ...data, data: productsFromApi(data.data) };
};
