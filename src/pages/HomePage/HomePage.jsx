import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Footer } from '../../components/Footer';
import './HomePage.css';
import { Ateste } from '../../components/Ateste';

export const HomePage = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
      <Ateste />
    </>
  );
};
