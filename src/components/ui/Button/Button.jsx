import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant, children, ...props }) => {
  return (
    <button {...props} className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'logout', 'pagination']),
};

export default Button;
