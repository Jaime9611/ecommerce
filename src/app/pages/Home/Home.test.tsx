import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { LOCAL_HOST } from '../../constants/paths';
import { renderWithProviders } from '../../tests/test-utils';
import Home from './Home';

const responseJson = {
  status: 'success',
  message: 'Products Retrieved',
  data: [
    { id: 'ofjaifj2jr29fafjalfjla-jofj0q-fafjal', name: 'Call of Duty', price: 20.38 },
    { id: 'ofjaifj2jr29fafjalfjla-jofj0q-fafackl', name: 'God of War 3', price: 34.38 },
  ],
};

export const handlers = [
  rest.get(`${LOCAL_HOST}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseJson), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

describe('Display product cards', () => {
  it('should display all the products', async () => {
    renderWithProviders(<Home />);

    expect(await screen.findByText(/Call of Duty/i)).toBeInTheDocument();
    expect(await screen.findByText(/God of War/i)).toBeInTheDocument();
  });
});
