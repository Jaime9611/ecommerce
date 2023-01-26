import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes/Navigator';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
