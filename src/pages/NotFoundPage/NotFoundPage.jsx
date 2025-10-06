import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <h1 className="default-title">Erro: 404</h1>
      <p>Página não encontrada.</p>
      <Link to={ROUTES.HOME} className="btn-header">
        Voltar à Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
