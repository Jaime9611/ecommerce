import { ProductApi } from '../api/models/product';
import { Product } from '../models/product';
import { productsFromApi, productsToApi } from './productAdapters';

describe('ProductApi to Product adapter', () => {
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

    expect(adaptedProduct[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        imageUrl: expect.any(String),
      }),
    );
  });

  it('should return the same values', () => {
    const adaptedProduct = productsFromApi(testProducts);

    expect(adaptedProduct[0].title).toEqual(testProducts[0].name);
    expect(adaptedProduct[0].description).toEqual(testProducts[0].desc);
    expect(adaptedProduct[0].price).toEqual(testProducts[0].price);
  });
});

describe('Product to ProductApi adapter', () => {
  const testProducts: Product[] = [
    {
      id: '1',
      title: 'Test Product',
      price: 23,
      description: 'Test Description',
      imageUrl: 'Image url test',
    },
  ];

  it('should return a Product Model when passed a ProductApi', () => {
    const adaptedProduct = productsToApi(testProducts);

    expect(adaptedProduct[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        price: expect.any(Number),
        desc: expect.any(String),
        imageUrl: expect.any(String),
      }),
    );
  });

  it('should return the same values', () => {
    const adaptedProduct = productsToApi(testProducts);

    expect(adaptedProduct[0].name).toEqual(testProducts[0].title);
    expect(adaptedProduct[0].desc).toEqual(testProducts[0].description);
    expect(adaptedProduct[0].price).toEqual(testProducts[0].price);
  });
});
