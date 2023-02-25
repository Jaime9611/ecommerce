// jest.mock('react-redux', () => {
//   return {
//     useSelector: () => {
//       return { items: [] };
//     },
//   };
// });
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { messages } from '../../../constants/messages';
import { printPrice } from '../../../helpers/priceUtils';
import { renderWithProviders } from '../../../tests/test-utils';
import Cart from './Cart';

it('should show on the Document is Cart is Open', () => {
  renderWithProviders(<Cart open={true} onClose={() => {}} />);

  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});

it('should show a message of no items when there are no items', () => {
  renderWithProviders(<Cart open={true} onClose={() => {}} />);
  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});

describe('When the Cart has 1 or more items', () => {
  const cartTest = {
    items: [
      {
        id: '1',
        title: 'Test product 1',
        price: 40,
        imageUrl: 'Img 1',
        description: 'Product Descp 1',
        quantity: 2,
        stock: 1,
        categories: [],
      },
      {
        id: '2',
        title: 'Test product 2',
        price: 40,
        imageUrl: 'Img 2',
        description: 'Product Descp 2',
        quantity: 3,
        stock: 1,
        categories: [],
      },
    ],
    cartTotal: 0,
  };

  beforeEach(() => {
    renderWithProviders(<Cart open={true} onClose={() => {}} />, {
      preloadedState: { cart: cartTest },
    });
  });

  it('should display all items from the cart', () => {
    expect(screen.getByText(cartTest.items[0].title)).toBeInTheDocument();
    expect(screen.getByText(cartTest.items[1].title)).toBeInTheDocument();
  });

  describe('When the increment button is clicked', () => {
    it('should increase the quantity of a product', () => {
      // ARRANGE
      const item = screen.getByLabelText(`CartItem-${cartTest.items[0].title}`);

      // ACT
      userEvent.click(within(item).getByRole('button', { name: '+' }));

      // ASSERT
      expect(within(item).getByText(`x${cartTest.items[0].quantity + 1}`)).toBeInTheDocument();
    });

    it('should increase the total price of the Cart', () => {
      // ARRANGE
      const cartTotal = screen.getByLabelText(/Cart Total/i);
      const totalPriceBefore = cartTest.items.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
      const totalPriceAfter = totalPriceBefore + cartTest.items[0].price;

      const item = screen.getByLabelText(`CartItem-${cartTest.items[0].title}`);

      // ACT
      userEvent.click(within(item).getByRole('button', { name: '+' }));

      // ASSERT
      expect(within(cartTotal).getByText(printPrice(totalPriceAfter))).toBeInTheDocument();
    });
  });
  describe('When the decrement button is clicked', () => {
    it('should decrease the quantity of a product', () => {
      // ARRANGE
      const item = screen.getByLabelText(`CartItem-${cartTest.items[0].title}`);

      // ACT
      userEvent.click(within(item).getByRole('button', { name: '-' }));

      // ASSERT
      expect(within(item).getByText(`x${cartTest.items[0].quantity - 1}`)).toBeInTheDocument();
    });

    it('should decrease the total price of the Cart', () => {
      // ARRANGE
      const cartTotal = screen.getByLabelText(/Cart Total/i);
      const totalPriceBefore = cartTest.items.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
      const totalPriceAfter = totalPriceBefore - cartTest.items[0].price;

      const item = screen.getByLabelText(`CartItem-${cartTest.items[0].title}`);

      // ACT
      userEvent.click(within(item).getByRole('button', { name: '-' }));

      // ASSERT
      expect(within(cartTotal).getByText(printPrice(totalPriceAfter))).toBeInTheDocument();
    });
  });
});
