import { Provider } from 'react-redux';
import AuthProvider from './auth/AuthProvider';
import Navigator from './routes/Navigator';
import { store } from './store/store';

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </AuthProvider>
  );
};

export default App;
