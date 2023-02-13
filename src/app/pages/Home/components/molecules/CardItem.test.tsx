import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { messages } from '../../../../constants/messages';
import { useCart } from '../../../../hooks/useCart';
import { Product } from '../../../../models/product';
import { renderWithProviders } from '../../../../tests/test-utils';
import CardItem from './CardItem';

it('should display product title and price', () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    description: 'Desc test',
    price: 30,
    imageUrl: 'image url',
    stock: 1,
    categories: [],
  };

  const testClickFunc = jest.fn();

  renderWithProviders(<CardItem item={product} onClick={testClickFunc} />);

  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(product.price)).toBeInTheDocument();
});

it('should show the Add Button when Product is not on the Cart', () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };
  const testClickFunc = jest.fn();

  renderWithProviders(<CardItem item={product} onClick={testClickFunc} />);

  const button = screen.queryByRole('button', { name: messages.PRODUCT.addToCart });

  expect(button).toBeInTheDocument();
});

it('should Not show the Add Button when Product is on the Cart', () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };
  const testClickFunc = jest.fn();

  renderWithProviders(<CardItem item={product} onClick={testClickFunc} />, {
    preloadedState: { cart: { items: [{ ...product, quantity: 2 }], cartTotal: product.price } },
  });

  const addButton = screen.queryByRole('button', { name: messages.PRODUCT.addToCart });
  const removeButton = screen.queryByRole('button', { name: messages.PRODUCT.removeFromCart });

  expect(addButton).toBeNull();
  expect(removeButton).toBeInTheDocument();
});

it('should call the Add function when Add button is clicked', async () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };

  const TestComponent = () => {
    const { items } = useCart();

    return <p data-testid='cart-item'>{items[0]?.id}</p>;
  };
  const testClickFunc = jest.fn();

  renderWithProviders(
    <>
      <CardItem item={product} onClick={testClickFunc} />
      <TestComponent />
    </>,
  );

  const button = screen.getByRole('button', { name: messages.PRODUCT.addToCart });
  userEvent.click(button);

  await waitFor(() => screen.getByText(product.id));

  expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  expect(screen.getByTestId('cart-item').textContent).toEqual(product.id);
});

it('should call the Remove function when Remove button is clicked', async () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };

  const TestComponent = () => {
    const { items } = useCart();

    return <p data-testid='cart-item'>{items.length !== 0 ? items[0]?.id : 'Removed'}</p>;
  };

  const testClickFunc = jest.fn();

  renderWithProviders(
    <>
      <CardItem item={product} onClick={testClickFunc} />
      <TestComponent />
    </>,
    {
      preloadedState: { cart: { items: [{ ...product, quantity: 2 }], cartTotal: product.price } },
    },
  );

  const button = screen.getByRole('button', { name: messages.PRODUCT.removeFromCart });

  expect(button).toBeInTheDocument();
  expect(screen.getByTestId('cart-item').textContent).toEqual(product.id);

  userEvent.click(button);

  await waitFor(() => screen.getByText('Removed'));

  expect(screen.getByTestId('cart-item').textContent).toEqual('Removed');
});
