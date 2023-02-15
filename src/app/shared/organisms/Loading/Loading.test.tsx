import { render, screen } from '@testing-library/react';
import Loading from './Loading';

it('should render a loading message', () => {
  render(<Loading />);
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});
