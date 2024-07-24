import { createBrowserRouter } from 'react-router-dom';

import { Home, Payment, CardList, CardRegist, CardAlias } from '~/pages';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
    children: [
      { element: <Payment />, path: '/Payment' },
      { element: <CardList />, path: '/card-list' },
      { element: <CardRegist />, path: '/card-regist' },
      { element: <CardAlias />, path: '/card-alias/:id' },
    ],
  },
]);

export default router;
