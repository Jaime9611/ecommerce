import { screen } from '@testing-library/react';

import { printPrice } from '../../../helpers/priceUtils';
import { CartProduct } from '../../../store/cart/cart.model';
import { renderWithProviders } from '../../../tests/test-utils';
import CartItem from './CartItem';

it('should render a Cart Item with title, price and quantity', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Description',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
    stock: 1,
    categories: [],
  };

  renderWithProviders(<CartItem item={testItem} />);

  expect(screen.getByText(testItem.title)).toBeInTheDocument();
  expect(screen.getByText(`x${testItem.quantity}`)).toBeInTheDocument();
  expect(screen.getByText(printPrice(testItem.price))).toBeInTheDocument();
});

it('should have an Increment Quantity button', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
    stock: 1,
    categories: [],
  };

  renderWithProviders(<CartItem item={testItem} />);

  const incrementButton = screen.getByRole('button', { name: '+' });

  expect(incrementButton).toBeInTheDocument();
});

it('should have a Decrement Quantity button', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
    stock: 1,
    categories: [],
  };

  renderWithProviders(<CartItem item={testItem} />);

  const decrementButton = screen.getByRole('button', { name: '-' });

  expect(decrementButton).toBeInTheDocument();
});
