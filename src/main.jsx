import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterFormPage } from './pages/RegisterFormPage';
import { UserPage } from './pages/UserPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterFormPage />,
  },
  {
    path: '/my-account',
    element: <UserPage />,
    children: [
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
    path: '/products/:productId',
    element: <ProductDetailsPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
