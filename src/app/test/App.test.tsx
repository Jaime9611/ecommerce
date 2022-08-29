import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

import Navigator from '../routes/Navigator';
import { setContext } from './helpers';

describe('Navigate as Authenticated Admin', () => {
  let history: any;

  beforeEach(() => {
    const context = setContext(true, true);
    history = createMemoryHistory();

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <AuthContext.Provider value={context}>
        <Router location={history.location} navigator={history}>
          <Navigator />
        </Router>
      </AuthContext.Provider>
    );
  });

  it('should have access to home', () => {
    const navLink = screen.getByRole('button', { name: /home/i });

    userEvent.click(navLink);

    expect(history.location.pathname).toBe('/');
  });
  it('should have access to Admin', () => {
    const navLink = screen.getByRole('button', { name: /admin/i });
    userEvent.click(navLink);

    expect(history.location.pathname).toBe('/admin');
  });
  it('should have access to Login', () => {
    const navLink = screen.getByRole('button', { name: /login/i });

    userEvent.click(navLink);

    expect(history.location.pathname).toBe('/login');
  });
});
