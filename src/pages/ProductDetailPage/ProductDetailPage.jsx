import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './ProductDetailPage.css';

export const ProductDetailPage = () => {
  const { produtoNome } = useParams();

  return (
    <>
      <Header />
      <h2>Detalhes do produto: {produtoNome}</h2>
      <Footer />
    </>
  );
};
