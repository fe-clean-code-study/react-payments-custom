import { createBrowserRouter } from 'react-router-dom';
import { Home, Payments, CardList } from '../pages';
import CardRegist from '../pages/CardRegist';
import CardAlias from '../pages/CardAlias';

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
