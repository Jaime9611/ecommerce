import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from '../../../../api/models/product';
import CardItem from './CardItem';

it('should display product title and price', () => {
  const product: Product = { id: '1', title: 'Test Game', description: 'Desc test', price: 30 };

  render(<CardItem item={product} onClick={() => {}} />);

  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(product.price)).toBeInTheDocument();
});

it('should call the function when button is clicked', () => {
  const product: Product = { id: '1', title: 'Test Game', description: 'Desc test', price: 30 };
  const testFunc = jest.fn();
  render(<CardItem item={product} onClick={testFunc} />);

  const button = screen.getByRole('button');
  userEvent.click(button);

  expect(testFunc).toBeCalled();
});
