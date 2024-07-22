import { createBrowserRouter } from 'react-router-dom';
import { Home, Payments, CardList, CardRegist, CardAlias } from '../pages';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
    children: [
      { element: <Payments />, path: '/payments' },
      { element: <CardList />, path: '/card-list' },
      { element: <CardRegist />, path: '/card-regist' },
      { element: <CardAlias />, path: '/card-alias' },
    ],
  },
]);

export default router;
