import { Provider } from 'react-redux';
import Navigator from './routes/Navigator';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
