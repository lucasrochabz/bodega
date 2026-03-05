import authRoutes from './authRoutes';
import productRoutes from './productRoutes';
import checkoutRoutes from './checkoutRoutes';

const publicRoutes = [...authRoutes, ...productRoutes, ...checkoutRoutes];

export default publicRoutes;
