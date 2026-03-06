import { ROUTES } from '../paths';
import { HomePage } from '@/pages/HomePage';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { NotFoundPage } from '../pages/NotFoundPage';

export const routes = [
  { path: ROUTES.home, element: <HomePage /> },

  ...publicRoutes,
  ...privateRoutes,

  // Rotas não encontradas
  { path: ROUTES.notFound, element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];
