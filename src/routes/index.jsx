import { Navigate } from 'react-router-dom';
import { ROUTES } from './paths';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { Welcome } from '../components/Welcome';
import { UserInfoPage } from '../pages/UserInfoPage';
import { OrdersPage } from '../pages/OrdersPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage';
import { AdminPage } from '../pages/AdminPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const routes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <RecoverPasswordPage />,
  },
  {
    path: `${ROUTES.RESET_PASSWORD}`,
    element: <ResetPasswordPage />,
  },
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
  {
    path: ROUTES.ACCOUNT,
    lazy: async () => {
      const { UserPage } = await import('../pages/UserPage');
      return {
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      };
    },
    children: [
      { path: '', element: <Welcome /> },
      { path: 'my-info', element: <UserInfoPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'orders/details/:orderId', element: <OrderDetailsPage /> },
      { path: '*', element: <Navigate to={ROUTES.NOT_FOUND} replace /> },
    ],
  },
  {
    path: ROUTES.ADMIN,
    element: <AdminPage />,
  },

  // Rotas não encontradas
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
