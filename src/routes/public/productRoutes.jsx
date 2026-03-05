import { ROUTES } from '../../paths';
import { ProtectedRoute } from '../../components/auth/ProtectedRoute';
import { ProductDetailsPage } from '../../pages/products';
import { OrderCheckoutPage } from '../../pages/orders';

const productRoutes = [
  {
    path: `${ROUTES.PRODUCT_DETAILS_BASE}/:productId`,
    element: <ProductDetailsPage />,
  },
  {
    path: `${ROUTES.CHECKOUT_BASE}/:orderId`,
    element: (
      <ProtectedRoute>
        <OrderCheckoutPage />
      </ProtectedRoute>
    ),
  },
];

export default productRoutes;
