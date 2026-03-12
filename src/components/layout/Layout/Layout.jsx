import PropTypes from 'prop-types';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.css';

const Layout = ({ children, container = true }) => {
  return (
    <>
      <Header />

      {container ? (
        <main className={styles.container}>{children}</main>
      ) : (
        <main>{children}</main>
      )}

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default Layout;
