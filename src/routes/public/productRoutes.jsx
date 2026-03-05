import { ROUTES } from '../../paths';
import { ProtectedRoute } from '../../components/auth/ProtectedRoute';
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from '../../pages/auth';
import { ProductDetailsPage } from '../../pages/products';
import { OrderCheckoutPage } from '../../pages/orders';

const routes = [
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
];

export default routes;
