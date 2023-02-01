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

export const productsToApi = (products: Product[]): ProductApi[] => {
  return products.map(product => {
    return {
      id: product.id,
      name: product.title,
      desc: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    };
  });
};
