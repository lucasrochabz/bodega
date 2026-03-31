import PropTypes from 'prop-types';
import styles from './Anchor.module.css';

const Anchor = ({ href, children, target }) => {
  const safeRel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <a className={styles.anchor} href={href} target={target} rel={safeRel}>
      {children}
    </a>
  );
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
};

export default Anchor;
