import { ThemeProvider } from '@emotion/react';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';

function App() {
  return (
    <>
      <div id='root-modal'></div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
