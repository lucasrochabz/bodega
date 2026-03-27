import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { useProduct } from '@/hooks/products';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingState } from '../../../components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { ProductDetails } from '../../../components/ui/ProductDetails';

const ProductDetailsPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { slug } = useParams();

  const { isLoading, data, error } = useProduct(slug);

  let content;
  if (isLoading) content = <LoadingState />;
  else if (error) content = <ErrorState message={error} />;
  else if (!data) content = <div>Produto não encontrado.</div>;
  else {
    content = (
      <ProductDetails product={data} isAuthenticated={isAuthenticated} />
    );
  }

  return <MainLayout title="Detalhe do Produto">{content}</MainLayout>;
};

export default ProductDetailsPage;
