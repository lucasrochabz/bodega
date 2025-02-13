import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage/';
import { MyAccountPage } from './pages/MyAccountPage/';
import { MyInfoPage } from './pages/MyInfoPage/MyInfoPage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage';
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
    path: '/my-account',
    element: <MyAccountPage />,
    children: [
      {
        path: 'my-info',
        element: <MyInfoPage />,
      },
      {
        path: 'orders/',
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
    element: <ProductDetailPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
