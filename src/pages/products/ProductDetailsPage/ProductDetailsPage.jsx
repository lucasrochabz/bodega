import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import useProduct from '../../../hooks/products/useProduct';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { ProductDetails } from '../../../components/ui/ProductDetails';
import { Footer } from '../../../components/layout/Footer';

const ProductDetailsPage = () => {
  const { login } = useContext(AuthContext);
  const { productId } = useParams();

  const { loading, data, error } = useProduct(productId);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Produto não encontrado.</div>;
  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />

      <Header />
      <ProductDetails product={data} loading={loading} isLogin={login} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
