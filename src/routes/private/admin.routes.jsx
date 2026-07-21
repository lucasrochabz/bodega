import { ROUTES } from '../../constants/routes';
import { AdminPage } from '@/pages/admin/AdminPage';

export const adminRoutes = [
  { path: ROUTES.admin.index, element: <AdminPage /> },
];
