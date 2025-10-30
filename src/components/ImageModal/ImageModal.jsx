import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

const ImageModal = ({ imagePath, onClose }) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} scaleUp`}>
        <button onClick={onClose}>Fechar</button>
        <img src={imagePath} alt="" />
      </div>
    </section>
  );
};

ImageModal.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
