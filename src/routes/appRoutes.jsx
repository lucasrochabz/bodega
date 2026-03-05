import { ROUTES } from '../paths';
import publicRoutes from './public';
import privateRoutes from './private';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

const routes = [
  ...publicRoutes,
  ...privateRoutes,

  // Rotas não encontradas
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
