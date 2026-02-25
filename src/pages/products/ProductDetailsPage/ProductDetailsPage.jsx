import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import useProduct from '../../../hooks/products/useProduct';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { ProductDetails } from '../../../components/ui/ProductDetails';
import { Footer } from '../../../components/layout/Footer';

const ProductDetailsPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { productId } = useParams();

  const { isLoading, data, error } = useProduct(productId);

  let content;
  if (isLoading) content = <div>Carregando...</div>;
  else if (error) content = <div>{error}</div>;
  else if (!data) content = <div>Produto não encontrado.</div>;
  else {
    content = (
      <ProductDetails product={data} isAuthenticated={isAuthenticated} />
    );
  }

  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />

      <Header />
      {content}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
