import PropTypes from 'prop-types';

const ErrorState = ({ message }) => {
  return <div>Ocorreu um erro: {message}</div>;
};

ErrorState.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorState;
