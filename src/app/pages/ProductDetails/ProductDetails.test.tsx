import { screen, waitFor } from '@testing-library/dom';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { MemoryRouter } from 'react-router';
import { LOCAL_HOST } from '../../constants/paths';
import Navigator from '../../routes/Navigator';
import { renderWithProviders } from '../../tests/test-utils';

const responseJson = {
  status: 'success',
  message: 'Products Retrieved',
  data: {
    id: 'ofjaifj2jr29fafjalfjla-jofj0q-fafjal',
    name: 'Call of Duty',
    price: 20.38,
    desc: 'dff',
    imageUrl: 'fajfa',
  },
};

export const handlers = [
  // TODO: ADD CONSTANT PATH FOR PRODUCTS
  rest.get(`${LOCAL_HOST}/products/product/${responseJson.data.id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseJson), ctx.delay(10));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

it('should render a Product Details page', async () => {
  await renderWithProviders(
    // TODO: Add product path in constants and here.
    <MemoryRouter initialEntries={[`/product/${responseJson.data.id}`]}>
      <Navigator />
    </MemoryRouter>,
  );

  expect(await screen.findByText(responseJson.data.name)).toBeInTheDocument();
});
