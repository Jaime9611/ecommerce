import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from '../../../api/models/product';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from './CartItem';

it('should render a Cart Item with title, price and quantity', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
  };

  render(
    <CartItem
      item={testItem}
      onIncrement={(item: Product) => {}}
      onDecrement={(item: Product) => {}}
    />,
  );

  expect(screen.getByText(testItem.title)).toBeInTheDocument();
  expect(screen.getByText(`x${testItem.quantity}`)).toBeInTheDocument();
  expect(screen.getByText(`$${testItem.price}`)).toBeInTheDocument();
});

it('should have an Increment Quantity button', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
  };

  const testFunc = jest.fn();
  render(<CartItem item={testItem} onIncrement={testFunc} onDecrement={(item: Product) => {}} />);

  const incrementButton = screen.getByRole('button', { name: '+' });
  userEvent.click(incrementButton);

  expect(testFunc).toBeCalled();
});

it('should have a Decrement Quantity button', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
  };

  const testFunc = jest.fn();
  render(<CartItem item={testItem} onIncrement={(item: Product) => {}} onDecrement={testFunc} />);

  const decrementButton = screen.getByRole('button', { name: '-' });
  userEvent.click(decrementButton);

  expect(testFunc).toBeCalled();
});
