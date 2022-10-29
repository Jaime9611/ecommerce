jest.mock('react-redux', () => {
  return {
    useSelector: () => {
      return { items: [] };
    },
  };
});
import { render, screen } from '@testing-library/react';
import { messages } from '../../../constants/messages';
import Cart from './Cart';

// TODO: Finish the test for this
it('should display all items from the cart', () => {
  render(<Cart open={false} onClose={() => {}} />);
});

it('should show a message of no items when there are no items', () => {
  render(<Cart open={true} onClose={() => {}} />);
  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});
