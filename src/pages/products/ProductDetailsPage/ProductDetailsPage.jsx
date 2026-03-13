import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { useProduct } from '@/hooks/products';
import { Layout } from '@/components/layout/Layout';
import { Loading } from '../../../components/ui/Loading';
import { ProductDetails } from '../../../components/ui/ProductDetails';

const ProductDetailsPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { productId } = useParams();

  const { isLoading, data, error } = useProduct(productId);

  let content;
  if (isLoading) content = <Loading />;
  else if (error) content = <div>{error}</div>;
  else if (!data) content = <div>Produto não encontrado.</div>;
  else {
    content = (
      <ProductDetails product={data} isAuthenticated={isAuthenticated} />
    );
  }

  return <Layout title="Detalhe do Produto">{content}</Layout>;
};

export default ProductDetailsPage;
