import { ProductApi } from '../api/models/product';
import { productsFromApi } from './productAdapters';

const testProducts: ProductApi[] = [
  {
    id: '1',
    name: 'Test Product',
    price: 23,
    desc: 'Test Description',
    imageUrl: 'Image url test',
  },
];

it('should return a Product Model when passed a ProductApi', () => {
  const adaptedProduct = productsFromApi(testProducts);

  expect(adaptedProduct[0].title).toEqual(testProducts[0].name);
  expect(adaptedProduct[0].description).toEqual(testProducts[0].desc);
  expect(adaptedProduct[0].price).toEqual(testProducts[0].price);
});
