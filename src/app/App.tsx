import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes/Navigator';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { UserState } from './store/users/userSlice';

const queryClient = new QueryClient();

const App = () => {
  const { mode } = useSelector(UserState);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
