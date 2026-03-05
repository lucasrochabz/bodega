import authRoutes from './authRoutes';
import productRoutes from './productRoutes';

const publicRoutes = [...authRoutes, ...productRoutes];

export default publicRoutes;
