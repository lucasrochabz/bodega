import { ROUTES } from './paths';
import accountRoutes from './accountRoutes';
import adminRoutes from './adminRoutes';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from '../pages/auth';
import { ProductDetailsPage } from '../pages/products';
import { OrderCheckoutPage } from '../pages/orders';
import { NotFoundPage } from '../pages/NotFoundPage';

const routes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.REGISTER, element: <RegisterPage /> },
  { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: `${ROUTES.RESET_PASSWORD}`, element: <ResetPasswordPage /> },
  {
    path: `${ROUTES.PRODUCT_DETAILS_BASE}/:productId`,
    element: <ProductDetailsPage />,
  },
  {
    path: `${ROUTES.CHECKOUT_BASE}/:orderId`,
    element: (
      <ProtectedRoute>
        <OrderCheckoutPage />
      </ProtectedRoute>
    ),
  },

  ...accountRoutes,

  ...adminRoutes,

  // Rotas não encontradas
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
