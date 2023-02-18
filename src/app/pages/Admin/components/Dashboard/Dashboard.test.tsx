import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should have the Dashboard', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
    );
  });
});
