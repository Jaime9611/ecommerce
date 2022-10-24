import { render, screen } from '@testing-library/react';
import { Product } from '../../../../api/models/product';
import CardList from './CardList';

it('should display the products title and price', () => {
  const products: Product[] = [
    { id: '1', title: 'Test Game 1', description: 'Desc 1', price: 30 },
    { id: '2', title: 'Test Game 2', description: 'Desc 2', price: 40 },
  ];

  render(<CardList data={products} />);

  expect(screen.getByText(products[0].title)).toBeInTheDocument();
  expect(screen.getByText(products[0].price)).toBeInTheDocument();
  expect(screen.getByText(products[1].title)).toBeInTheDocument();
  expect(screen.getByText(products[1].price)).toBeInTheDocument();
});

it('should display the list of products', () => {
  const products: Product[] = [
    { id: '1', title: 'Test Game 1', description: 'Desc 1', price: 30 },
    { id: '2', title: 'Test Game 2', description: 'Desc 2', price: 40 },
  ];

  render(<CardList data={products} />);

  expect(screen.getAllByRole('heading').length).toBe(products.length);
});
