import { ThemeProvider } from '@emotion/react';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
