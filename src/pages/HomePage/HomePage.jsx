import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Head title="Home" description="Descrição da página Home" />
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};
