import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, show, duration = 3000, onClose }) => {
  useEffect(() => {
    if (!show) return;

    // Forma mais flexível, permite manipular ou adicionar lógica antes de chamar a função
    // const timer = setTimeout(() => {
    //   onClose();
    // }, duration);

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;
  return (
    <div className={`${styles.toast} toastFade`}>
      <p>{message}</p>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
