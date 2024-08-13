import { createBrowserRouter } from 'react-router-dom';

import CardAlias from '~/pages/CardAlias';
import CardList from '~/pages/CardList';
import CardRegist from '~/pages/CardRegist';

const Router = createBrowserRouter([
  { element: <CardList />, path: '/card-list' },
  { element: <CardRegist />, path: '/card-regist' },
  { element: <CardAlias />, path: '/card-alias/:id' },
]);

export default Router;