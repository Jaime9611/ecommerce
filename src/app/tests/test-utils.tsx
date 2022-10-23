import React, { PropsWithChildren, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// import type { RootState } from '../store/store';
import productsReducer from '../store/products/productsSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: EnhancedStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // initialState = {},
    store = configureStore({ reducer: { products: productsReducer } }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<ReactNode>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
