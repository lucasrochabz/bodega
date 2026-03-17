import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { useProduct } from '@/hooks/products';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingState } from '../../../components/ui/LoadingState';
import { ProductDetails } from '../../../components/ui/ProductDetails';

const ProductDetailsPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { productId } = useParams();

  const { isLoading, data, error } = useProduct(productId);

  let content;
  if (isLoading) content = <LoadingState />;
  else if (error) content = <div>{error}</div>;
  else if (!data) content = <div>Produto não encontrado.</div>;
  else {
    content = (
      <ProductDetails product={data} isAuthenticated={isAuthenticated} />
    );
  }

  return <MainLayout title="Detalhe do Produto">{content}</MainLayout>;
};

export default ProductDetailsPage;
