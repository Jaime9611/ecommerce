import { ProductApi } from '../api/models/product';
import { Product } from '../models/product';

export const productsFromApi = (products: ProductApi[]): Product[] => {
  return products.map(product => {
    return {
      id: product.id,
      title: product.name,
      description: product.desc,
      imageUrl: product.imageUrl,
      price: product.price,
    };
  });
};
