import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ show, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!show) return;

    // fix: saber o que é isso
    /* Forma mais flexível, permite manipular ou adicionar lógica antes de chamar a função
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    */

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show || !message) return null;

  // fix add type: success ou erro (azul: #e0eefb #5dafea)
  return (
    <section className={`${styles.toast} anim-toast-fade`}>
      <div className={styles.toastHeader}>
        <strong>Erro</strong>
        <small>Agora</small>
      </div>

      <div className={styles.toastBody}>
        <p>{message}</p>
      </div>
    </section>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
