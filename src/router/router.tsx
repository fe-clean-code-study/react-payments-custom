import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Payments from '../pages/Payments';
import CardList from '../pages/CardList';
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
