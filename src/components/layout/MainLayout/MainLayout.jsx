import PropTypes from 'prop-types';
import { SEO } from '@/components/shared/SEO';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './MainLayout.module.css';

const DEFAULT_HEAD = {
  title: 'Loja de tecnologia',
  description:
    'Os melhores produtos de tecnologia em um só lugar com compra fácil e entrega segura.',
};

const MainLayout = ({
  children,
  container = true,
  title = DEFAULT_HEAD.title,
  description = DEFAULT_HEAD.description,
}) => {
  return (
    <>
      <SEO title={title} description={description} />

      <Header />

      <main className={container && styles.container}>{children}</main>

      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MainLayout;
