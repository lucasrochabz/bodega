import PropTypes from 'prop-types';
import styles from './Loading.module.css';

const Loading = ({ message = 'Carregando...' }) => {
  return (
    <div role="status" aria-live="polite">
      <span>{message}</span>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
