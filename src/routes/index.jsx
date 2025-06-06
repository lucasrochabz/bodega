import { lazy, Suspense } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Loading } from '../components/Loading';
import { HomePage } from '@/pages/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage';
import { Welcome } from '../components/Welcome';
import { UserInfoPage } from '../pages/UserInfoPage';
import { OrdersPage } from '../pages/OrdersPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage';
import { AdminPage } from '../pages/AdminPage/AdminPage';

const UserPage = lazy(() => import('../pages/UserPage'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetailsPage />,
  },
  {
    path: '/checkout/:orderId',
    element: (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/recover-password',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/account',
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
    ],
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
];

export default routes;
