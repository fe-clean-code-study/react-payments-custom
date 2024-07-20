import { ThemeProvider } from '@emotion/react';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div id='root-modal'></div>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
