import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage/';
import { MyAccount } from './pages/MyAccount/';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { Orders } from './pages/Orders';
import { OrderDetails } from './pages/OrderDetails';
import './App.css';

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
    element: <MyAccount />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetailPage />,
  },
  {
    path: '/orders/:userId',
    element: <Orders />,
  },
  {
    path: '/orders/details/:orderId',
    element: <OrderDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
