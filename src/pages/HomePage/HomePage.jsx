import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList/ProductList';
import { Footer } from '../../components/Footer/Footer';
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
