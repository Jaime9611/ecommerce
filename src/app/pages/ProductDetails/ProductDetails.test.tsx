import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { MemoryRouter } from 'react-router';
import { Product } from '../../api/models/product';
import { LOCAL_HOST } from '../../constants/paths';
import Navigator from '../../routes/Navigator';
import { setContext } from '../../tests/helpers';
import { renderWithProviders } from '../../tests/test-utils';

const responseJson = {
  status: 'success',
  message: 'Products Retrieved',
  data: [
    { id: 'ofjaifj2jr29fafjalfjla-jofj0q-fafjal', title: 'Call of Duty', price: 20.38 },
    { id: 'ofjaifj2jr29fafjalfjla-jofj0q-fafackl', title: 'God of War 3', price: 34.38 },
  ],
};

export const handlers = [
  // TODO: ADD CONSTANT PATH FOR PRODUCTS
  rest.get(`${LOCAL_HOST}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseJson), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

it('should render a Product Details page', async () => {
  renderWithProviders(
    // TODO: Add product path in constants and here.
    <MemoryRouter initialEntries={[`/product/${responseJson.data[0].id}`]}>
      <Navigator />
    </MemoryRouter>,
  );

  expect(
    await screen.findByRole('heading', { name: responseJson.data[0].title }),
  ).toBeInTheDocument();
});
