import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/AuthProvider';
import Navigator from './routes/Navigator';
import { store } from './store/store';

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
};

export default App;
