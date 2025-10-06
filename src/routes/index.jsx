import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './paths';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Loading } from '../components/Loading';
import { HomePage } from '../pages/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage';
import { Welcome } from '../components/Welcome';
import { UserInfoPage } from '../pages/UserInfoPage';
import { OrdersPage } from '../pages/OrdersPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage';
import { AdminPage } from '../pages/AdminPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const UserPage = lazy(() => import('../pages/UserPage'));

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
    path: ROUTES.RECOVER_PASSWORD,
    element: <RecoverPasswordPage />,
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
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute>
          <UserPage />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Welcome />,
      },
      {
        path: 'my-info',
        element: <UserInfoPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
      {
        path: 'orders/details/:orderId',
        element: <OrderDetailsPage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.NOT_FOUND} replace />,
      },
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
