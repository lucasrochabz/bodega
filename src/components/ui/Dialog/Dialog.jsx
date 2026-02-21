import PropTypes from 'prop-types';
import styles from './Dialog.module.css';

const Dialog = ({ show, onClose, children, modal = true }) => {
  if (!show) return null;

  const content = (
    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
      {children}
      <button className={styles.btnClose} onClick={onClose}>
        X
      </button>
    </div>
  );

  if (!modal) {
    return <div className={styles.nonModalContainer}>{content}</div>;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      {content}
    </div>
  );
};

Dialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modal: PropTypes.bool,
};

export default Dialog;
