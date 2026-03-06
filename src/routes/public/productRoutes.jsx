import { ROUTES } from '../../paths';
import { ProductDetailsPage } from '../../pages/products';

const productRoutes = [
  {
    path: ROUTES.product.details,
    element: <ProductDetailsPage />,
  },
];

export default productRoutes;
