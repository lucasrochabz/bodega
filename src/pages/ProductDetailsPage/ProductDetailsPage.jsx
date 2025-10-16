import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useFetch } from '../../hooks';
import { GET_PRODUCT_ID } from '../../api/products';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { ProductDetails } from '../../components/ProductDetails';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';

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

      <Header />
      {loading ? (
        <Loading />
      ) : (
        results && (
          <ProductDetails
            product={results.data[0]}
            loading={loading}
            isLogin={login}
          />
        )
      )}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
