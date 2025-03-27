import './Error.css';

export const Error = ({ error }) => {
  if (!error) return null;

  return <p className="error">{error}</p>;
};
