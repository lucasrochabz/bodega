import PropTypes from 'prop-types';

const EmptyState = ({ message = 'Nenhum resultado encontrado.' }) => {
  return <div>{message}</div>;
};

EmptyState.propTypes = {
  message: PropTypes.string,
};

export default EmptyState;
