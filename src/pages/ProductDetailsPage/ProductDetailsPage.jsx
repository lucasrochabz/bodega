import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductDetails } from '../../components/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <>
      <Head
        title="Detalhe do Produto"
        description="Descrição da página Detalhe do Produto"
      />
      <Header />
      <ProductDetails />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
