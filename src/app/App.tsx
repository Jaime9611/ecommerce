import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/AuthProvider';
import Navigator from './routes/Navigator';
import { setupStore, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Provider store={setupStore()}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default App;
