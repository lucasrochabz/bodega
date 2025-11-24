import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useFetch } from '../../hooks';
import { GET_PRODUCT_ID } from '../../api/products';
import { Head } from '../../components//common/Head';
import { Header } from '../../components/layout/Header';
import { ProductDetails } from '../../components/ui/ProductDetails';
import { Footer } from '../../components/layout/Footer';
import { Loading } from '../../components/ui/Loading';

const ProductDetailsPage = () => {
  const { login } = useContext(UserContext);
  const { productId } = useParams();
  const { request, loading, results } = useFetch();

  useEffect(() => {
    const getProduct = async () => {
      const { url, options } = GET_PRODUCT_ID(productId);
      request(url, options);
    };

    getProduct();
  }, [productId, request]);

  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />

      {loading ? (
        <Loading />
      ) : (
        results && (
          <>
            <Header />
            <ProductDetails
              product={results.data[0]}
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
