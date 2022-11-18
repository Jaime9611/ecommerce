import { render, screen } from '@testing-library/react';
import { CartProduct } from '../../../store/cart/cart.model';
import CartItem from './CartItem';

// TODO: Make the test for the functions
it('should render a Cart Item with title, price and quantity', () => {
  const testItem: CartProduct = {
    id: '1',
    description: 'Desc',
    imageUrl: 'ImageUrl',
    title: 'Test Item',
    price: 20,
    quantity: 2,
  };

  render(<CartItem item={testItem} />);

  expect(screen.getByText(testItem.title)).toBeInTheDocument();
});
