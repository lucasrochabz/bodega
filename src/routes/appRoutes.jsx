import { ROUTES } from '../paths';
import publicRoutes from './public';
import privateRoutes from './private';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

const routes = [
  { path: ROUTES.home, element: <HomePage /> },

  ...publicRoutes,
  ...privateRoutes,

  // Rotas não encontradas
  { path: ROUTES.notFound, element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
