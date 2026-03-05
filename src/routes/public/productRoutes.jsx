import { ROUTES } from '../../paths';
import { ProtectedRoute } from '../../components/auth/ProtectedRoute';
import { ProductDetailsPage } from '../../pages/products';
import { OrderCheckoutPage } from '../../pages/orders';

const productRoutes = [
  {
    path: ROUTES.product.details,
    element: <ProductDetailsPage />,
  },
  {
    path: ROUTES.checkout.details,
    element: (
      <ProtectedRoute>
        <OrderCheckoutPage />
      </ProtectedRoute>
    ),
  },
];

export default productRoutes;
