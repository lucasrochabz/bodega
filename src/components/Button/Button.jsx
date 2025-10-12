import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`btn btn-${props.type}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
