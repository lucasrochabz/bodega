import { ROUTES } from './paths';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { Welcome } from '../components/ui/Welcome';
import { UserInfoPage } from '../pages/users/UserInfoPage';
import { OrdersPage } from '../pages/orders/OrdersPage';
import { OrderDetailsPage } from '../pages/orders/OrderDetailsPage';

const accountRoutes = [
  {
    path: ROUTES.ACCOUNT,
    lazy: async () => {
      const { UserPage } = await import('../pages/users/UserPage');
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
    ],
  },
];

export default accountRoutes;
