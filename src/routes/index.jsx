import { ROUTES } from './paths';
import accountRoutes from './accountRoutes';
import adminRoutes from './adminRoutes';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
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
        <CheckoutPage />
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
