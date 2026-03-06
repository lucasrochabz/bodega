import { authRoutes } from './auth.routes';
import { productRoutes } from './product.routes';
import { checkoutRoutes } from './checkout.routes';

export const publicRoutes = [
  ...authRoutes,
  ...productRoutes,
  ...checkoutRoutes,
];
