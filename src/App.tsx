import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from '~/router/router';
import store from '~/store';
import theme from '~/styles/theme';

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
