import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

import Navigator from '../routes/Navigator';
import { setContext } from './helpers';
import routes from '../routes/constants/routes.json';

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
    const navLink = screen.getByRole('button', { name: routes.home.name });

    userEvent.click(navLink);

    expect(history.location.pathname).toBe(routes.home.path);
  });
  it('should have access to Admin', () => {
    const navLink = screen.getByRole('button', { name: routes.admin.name });
    userEvent.click(navLink);

    expect(history.location.pathname).toBe('/admin');
  });
  it('should not have access to Login tag', () => {
    const navLink = screen.queryByRole('button', { name: routes.login.name });

    expect(navLink).not.toBeInTheDocument();
  });
});

describe('Navigate as Authenticated but not as Admin', () => {
  let history: any;

  beforeEach(() => {
    const context = setContext(true, false);
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

  it('should not have access to Admin page', () => {
    const admin = screen.queryByRole('button', { name: routes.admin.name });

    expect(admin).not.toBeInTheDocument();
  });

  it('should not have access to Login tag', () => {
    const navLink = screen.queryByRole('button', { name: routes.login.name });

    expect(navLink).not.toBeInTheDocument();
  });
});

describe('Navigate as not Authenticated user', () => {
  let history: any;

  beforeEach(() => {
    const context = setContext(false, true);
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
    const navLink = screen.getByRole('button', { name: routes.home.name });

    userEvent.click(navLink);

    expect(history.location.pathname).toBe(routes.home.path);
  });

  it('should have access to Admin', () => {
    const navLink = screen.queryByRole('button', { name: routes.admin.name });

    expect(navLink).not.toBeInTheDocument();
  });

  it('should have access to Login tag', () => {
    const navLink = screen.getByRole('button', {
      name: routes.login.name,
    });

    userEvent.click(navLink);

    expect(history.location.pathname).toBe(routes.login.path);
  });
});
