import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { SEO } from '../../components/shared/SEO';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="Descrição da Página não encontrada"
      />

      <Header />
      <section className={styles.notFound}>
        <h1 className="title">Erro: 404</h1>
        <p>Página não encontrada.</p>
        <Link to={ROUTES.home} className="btn-header">
          Voltar à Home
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
