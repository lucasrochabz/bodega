import { LINKS } from '@/constants/links';
import { Anchor } from '@/components/ui/Anchor';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Bodega &copy; Todos os direitos reservados.</p>
      <p>
        Feito por{' '}
        <Anchor href={LINKS.GITHUB} target="_blank">
          Lucas Rocha
        </Anchor>
      </p>
    </footer>
  );
};

export default Footer;
