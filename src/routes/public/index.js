import authRoutes from './auth.routes';
import productRoutes from './product.routes';
import checkoutRoutes from './checkout.routes';

const publicRoutes = [...authRoutes, ...productRoutes, ...checkoutRoutes];

export default publicRoutes;
