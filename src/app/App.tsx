import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { Router } from './router';
import { theme } from './styles';

import { store } from '~/entities/Card';
import './styles/global.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <div id='root-modal'></div>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
