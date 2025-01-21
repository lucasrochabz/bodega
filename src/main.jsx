import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage/';
import { ProfilePage } from './pages/ProfilePage/';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OrderCompleted } from './pages/OrderCompleted';
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
    path: '/perfil',
    element: <ProfilePage />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetailPage />,
  },
  {
    path: '/orders/:orderId',
    element: <OrderCompleted />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
