import PropTypes from 'prop-types';

const LoadingState = ({ message = 'Carregando...' }) => {
  return (
    <div role="status" aria-live="polite">
      <span>{message}</span>
    </div>
  );
};

LoadingState.propTypes = {
  message: PropTypes.string,
};

export default LoadingState;
