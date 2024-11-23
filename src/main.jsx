import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OrderCompleted } from './pages/OrderCompleted/OrderCompleted.jsx';
import { App } from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
    <RouterProvider router={router} />
  </StrictMode>,
);
