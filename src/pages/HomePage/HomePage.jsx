import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList/ProductList';
import { Footer } from '../../components/Footer';
import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};
