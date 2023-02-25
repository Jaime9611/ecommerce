import { productApiToProduct, productsFromApi } from '../adapters/productAdapters';
import { LOCAL_HOST } from '../constants/paths';
import { HttpError } from './errors/error-responses';
import { ProductListResponse, ProductResponse } from './models/responses';

const productsPath = `${LOCAL_HOST}/products`;
const productPath = `${productsPath}/product`;

export const getAllProducts = async () => {
  const response = await fetch(productsPath);
  const data = (await response.json()) as ProductListResponse;

  if (!response.ok) {
    throw new HttpError('Request failed', response.status, data);
  }

  return { ...data, data: productsFromApi(data.data) };
};

export const getProductById = async (productId: string) => {
  const response = await fetch(`${productPath}/${productId}`);
  const data = (await response.json()) as ProductResponse;

  if (!response.ok) {
    throw new HttpError('Request failed', response.status, data);
  }

  return { ...data, data: productApiToProduct(data.data) };
};
