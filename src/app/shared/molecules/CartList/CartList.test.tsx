import { render, screen } from '@testing-library/react';
import { Product } from '../../../api/models/product';
import CartList from './CartList';

it('should show all the items of the given array', () => {
  const products: Product[] = [
    {
      id: '1',
      title: 'Test Product 1',
      price: 234,
      description: 'Desc',
      imageUrl: 'Image',
    },
    {
      id: '2',
      title: 'Test product 2',
      price: 23,
      description: 'Desc',
      imageUrl: 'Image 2',
    },
  ];

  render(<CartList items={products} />);
  expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();
});

it('should show a no items message when there are no items', () => {
  const products: Product[] = [] as Product[];

  render(<CartList items={products} />);
  expect(screen.getByText(/There are no items in the cart/i)).toBeInTheDocument();
});
