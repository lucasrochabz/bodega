import { ROUTES } from '../../paths';
import { ProtectedRoute } from '../../components/auth/ProtectedRoute';
import { OrderCheckoutPage } from '../../pages/orders';

export const checkoutRoutes = [
  {
    path: ROUTES.checkout.details,
    element: (
      <ProtectedRoute>
        <OrderCheckoutPage />
      </ProtectedRoute>
    ),
  },
];
