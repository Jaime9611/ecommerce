import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { messages } from '../../../../constants/messages';
import { Product } from '../../../../models/product';
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

  const testAddFunc = jest.fn();
  const testRemoveFunc = jest.fn();
  const testClickFunc = jest.fn();

  render(
    <CardItem
      item={product}
      isOnCart={false}
      onAddToCart={testAddFunc}
      onRemoveFromCart={testRemoveFunc}
      onClick={testClickFunc}
    />,
  );

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
  const testAddFunc = jest.fn();
  const testRemoveFunc = jest.fn();
  const testClickFunc = jest.fn();

  render(
    <CardItem
      item={product}
      isOnCart={false}
      onAddToCart={testAddFunc}
      onRemoveFromCart={testRemoveFunc}
      onClick={testClickFunc}
    />,
  );

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
  const testAddFunc = jest.fn();
  const testRemoveFunc = jest.fn();
  const testClickFunc = jest.fn();

  render(
    <CardItem
      item={product}
      isOnCart={true}
      onAddToCart={testAddFunc}
      onRemoveFromCart={testRemoveFunc}
      onClick={testClickFunc}
    />,
  );

  const addButton = screen.queryByRole('button', { name: messages.PRODUCT.addToCart });
  const removeButton = screen.queryByRole('button', { name: messages.PRODUCT.removeFromCart });

  expect(addButton).toBeNull();
  expect(removeButton).toBeInTheDocument();
});

it('should call the Add function when Add button is clicked', () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };
  const testAddFunc = jest.fn();
  const testRemoveFunc = jest.fn();
  const testClickFunc = jest.fn();

  render(
    <CardItem
      item={product}
      isOnCart={false}
      onAddToCart={testAddFunc}
      onRemoveFromCart={testRemoveFunc}
      onClick={testClickFunc}
    />,
  );

  const button = screen.getByRole('button', { name: messages.PRODUCT.addToCart });
  userEvent.click(button);

  expect(testAddFunc).toBeCalled();
});

it('should call the Remove function when Remove button is clicked', () => {
  const product: Product = {
    id: '1',
    title: 'Test Game',
    imageUrl: 'Image url',
    description: 'Desc test',
    price: 30,
    stock: 1,
    categories: [],
  };

  const testAddFunc = jest.fn();
  const testRemoveFunc = jest.fn();
  const testClickFunc = jest.fn();

  render(
    <CardItem
      item={product}
      isOnCart={true}
      onAddToCart={testAddFunc}
      onRemoveFromCart={testRemoveFunc}
      onClick={testClickFunc}
    />,
  );

  const button = screen.getByRole('button', { name: messages.PRODUCT.removeFromCart });
  userEvent.click(button);

  expect(testRemoveFunc).toBeCalled();
});
