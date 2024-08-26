import { createBrowserRouter, Navigate } from 'react-router-dom';

import { CardAlias } from '~/pages/CardAlias';
import { CardRegist } from '~/pages/CardRegist';
import { ManageCard } from '~/pages/ManageCard';

const Router = createBrowserRouter([
  { element: <Navigate to='/card-list' />, path: '/' },
  { element: <ManageCard />, path: '/manage-card' },
  { element: <CardRegist />, path: '/card-regist' },
  { element: <CardAlias />, path: '/card-alias/:id' },
]);

export default Router;
