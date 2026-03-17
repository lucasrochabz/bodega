import { accountRoutes } from './account.routes';
import { adminRoutes } from './admin.routes';

export const privateRoutes = [...accountRoutes, ...adminRoutes];
