import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import useProduct from '../../../hooks/products/useProduct';
import { Head } from '../../../components/shared/Head';
import { Header } from '../../../components/layout/Header';
import { Loading } from '../../../components/ui/Loading';
import { ProductDetails } from '../../../components/ui/ProductDetails';
import { Footer } from '../../../components/layout/Footer';
import styles from './ProductDetailsPage.module.css';

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

  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />

      <Header />
      <main className={styles.wrapper}>{content}</main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
