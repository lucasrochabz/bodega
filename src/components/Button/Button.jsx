import './Button.css';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={props.className}>
      {children}
    </button>
  );
};
