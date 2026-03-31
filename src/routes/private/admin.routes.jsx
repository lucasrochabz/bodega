import { ROUTES } from '../../constants/routes';
import { AdminPage } from '@/pages/admin/AdminPage';

export const adminRoutes = [
  { path: ROUTES.admin.base, element: <AdminPage /> },
];
