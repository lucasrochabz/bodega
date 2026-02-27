import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...props }) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button {...props} className={`${styles.base} ${variantClass}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'logout', 'pagination']),
};

export default Button;
