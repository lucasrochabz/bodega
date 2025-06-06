import './Button.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`btn btn-${props.type}`}>
      {children}
    </button>
  );
};

export default Button;
