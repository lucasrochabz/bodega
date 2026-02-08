import { ROUTES } from './paths';
import accountRoutes from './accountRoutes';
import adminRoutes from './adminRoutes';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '../pages/auth/ResetPasswordPage';
import { ProductDetailsPage } from '../pages/products/ProductDetailsPage';
import { OrderCheckoutPage } from '../pages/orders/OrderCheckoutPage';
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
