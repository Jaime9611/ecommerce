import { LOCAL_HOST } from '../constants/paths';
import { Product } from './models/product';

const productsPath = `${LOCAL_HOST}/products`;

export const getAllProducts = async () => {
  const response = await fetch(productsPath);

  return (await response.json()) as Product[];
};
