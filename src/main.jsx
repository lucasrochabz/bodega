import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';
import { UserPage } from './pages/UserPage';
import { Teste } from './components/Teste/Teste.jsx';
import { UserInfoPage } from './pages/UserInfoPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import './index.css';
import { AdminPage } from './pages/AdminPage/AdminPage.jsx';

const router = createBrowserRouter([
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
        element: <Teste />,
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
