import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductList } from './components/ProductList/ProductList';
import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};
