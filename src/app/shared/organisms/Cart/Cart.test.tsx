import { render } from '@testing-library/react';
import Cart from './Cart';

it('should display all items from the cart', () => {
  render(<Cart />);
});
