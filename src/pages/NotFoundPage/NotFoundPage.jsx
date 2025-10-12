import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { Head } from '../../components/Head';
import './NotFoundPage.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Head
        title="Página não encontrada"
        description="Descrição da Página não encontrada"
      />

      <Header />
      <section className="not-found">
        <h1 className="default-title">Erro: 404</h1>
        <p>Página não encontrada.</p>
        <Link to={ROUTES.HOME} className="btn-header">
          Voltar à Home
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
