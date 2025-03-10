import './Button.css';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`btn btn-${props.type}`}>
      {children}
    </button>
  );
};
