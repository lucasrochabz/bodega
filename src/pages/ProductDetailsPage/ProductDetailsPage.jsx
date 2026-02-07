import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import useProduct from '../../hooks/products/useProduct';
import { Head } from '../../components/shared/Head';
import { Loading } from '../../components/ui/Loading';
import { Header } from '../../components/layout/Header';
import { ProductDetails } from '../../components/ui/ProductDetails';
import { Footer } from '../../components/layout/Footer';

const ProductDetailsPage = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();

  const { data, loading } = useProduct(productId);

  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />

      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            <Header />
            <ProductDetails
              product={data.data}
              loading={loading}
              isLogin={login}
            />
            <Footer />
          </>
        )
      )}
    </>
  );
};

export default ProductDetailsPage;
