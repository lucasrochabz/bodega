import PropTypes from 'prop-types';
import { Head } from '@/components/shared/Head';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.css';

const DEFAULT_HEAD = {
  title: 'Loja de tecnologia',
  description:
    'Os melhores produtos de tecnologia em um só lugar com compra fácil e entrega segura.',
};

// fix: mudar nome para MainLayout
const Layout = ({
  children,
  container = true,
  title = DEFAULT_HEAD.title,
  description = DEFAULT_HEAD.description,
}) => {
  return (
    <>
      <Head title={title} description={description} />

      <Header />

      <main className={container && styles.container}>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
