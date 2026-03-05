import { ROUTES } from '../../paths';
import { ProtectedRoute } from '../../components/auth/ProtectedRoute';
import { Welcome } from '../../components/ui/Welcome';
import { UserInfoPage } from '../../pages/users';
import { OrdersPage, OrderDetailsPage } from '../../pages/orders';

const accountRoutes = [
  {
    path: ROUTES.account.base,
    element: <ProtectedRoute />,
    children: [
      {
        lazy: async () => {
          const { UserPage } = await import('../../pages/users');
          return { element: <UserPage /> };
        },
        children: [
          { index: true, element: <Welcome /> },
          { path: ROUTES.account.myInfo, element: <UserInfoPage /> },
          { path: ROUTES.account.orders, element: <OrdersPage /> },
          { path: 'orders/details/:orderId', element: <OrderDetailsPage /> },
        ],
      },
    ],
  },
];

export default accountRoutes;
