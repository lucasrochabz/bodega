import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { AuthContext } from '../../../contexts/AuthContext';
import { useProduct } from '@/hooks/products';
import { useCreateOrder } from '@/hooks/orders';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { ProductDetails } from '@/components/ui/ProductDetails';

const ProductDetailsPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { slug } = useParams();
  const navigate = useNavigate();

  const { createOrder, isLoading: isCreatingOrder } = useCreateOrder();
  const { isLoading, data, error } = useProduct(slug);

  const handleCreateOrder = async (productId) => {
    if (!isAuthenticated) {
      navigate(ROUTES.auth.login);
      return;
    }

    const response = await createOrder({
      status: 'rascunho',
      products: [{ product_id: productId, quantity: 1 }],
    });

    if (response?.id) {
      navigate(ROUTES.checkout.goToDetails(response.id));
    }
  };

  let content;
  if (isLoading) content = <LoadingState />;
  else if (error) content = <ErrorState message={error} />;
  else if (!data) content = <div>Produto não encontrado.</div>;
  else {
    content = (
      <ProductDetails
        product={data}
        onCreateOrder={() => handleCreateOrder(data.id)}
        isCreatingOrder={isCreatingOrder}
      />
    );
  }

  return <MainLayout title="Detalhe do Produto">{content}</MainLayout>;
};

export default ProductDetailsPage;
