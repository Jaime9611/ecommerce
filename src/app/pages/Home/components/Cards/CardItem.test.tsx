import { render, screen } from '@testing-library/react';
import { Product } from '../../../../api/models/product';
import CardItem from './CardItem';

it('should display product title and price', () => {
  const product: Product = { id: '1', title: 'Test Game', description: 'Desc test', price: 30 };

  render(<CardItem item={product} />);

  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(product.price)).toBeInTheDocument();
});
