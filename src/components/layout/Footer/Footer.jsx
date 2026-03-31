import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Bodega &copy; Todos os direitos reservados.</p>
      <p>
        Feito por{' '}
        <a
          href="https://github.com/lucasrochabz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucas Rocha
        </a>
      </p>
    </footer>
  );
};

export default Footer;
