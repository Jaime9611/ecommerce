import { ProductApi } from '../api/models/product';
import { Product } from '../models/product';

// TODO: Test for this function
export const productApiToProduct = (product: ProductApi): Product => {
  return {
    id: product.id,
    title: product.name,
    description: product.desc,
    imageUrl: product.imageUrl,
    price: product.price,
    stock: product.inventory.quantity,
    categories: product.categories,
  };
};

// TODO: Test for this function
export const productToProductApi = (product: Product): ProductApi => {
  return {
    id: product.id,
    name: product.title,
    desc: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    inventory: { id: '', quantity: product.stock },
    categories: product.categories,
  };
};

export const productsFromApi = (products: ProductApi[]): Product[] => {
  return products.map(product => {
    return productApiToProduct(product);
  });
};

export const productsToApi = (products: Product[]): ProductApi[] => {
  return products.map(product => {
    return productToProductApi(product);
  });
};
