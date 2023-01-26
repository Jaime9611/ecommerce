import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productsReducer from './products/productsSlice';
import userReducer from './users/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: persistedReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });

export const store = setupStore();

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
