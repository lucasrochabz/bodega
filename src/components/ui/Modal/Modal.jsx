import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.btnClose} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
