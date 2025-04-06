import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';
import { UserPage } from './pages/UserPage';
import { Welcome } from './components/Welcome';
import { UserInfoPage } from './pages/UserInfoPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import { AdminPage } from './pages/AdminPage/AdminPage';

export const routes = [
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
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Welcome />,
      },
      {
        path: 'my-info',
        element: (
          <ProtectedRoute>
            <UserInfoPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'orders/details/:orderId',
        element: (
          <ProtectedRoute>
            <OrderDetailsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
];
