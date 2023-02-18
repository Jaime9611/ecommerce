import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should have the Dashboard', () => {
    render(<Dashboard />);
  });
});
