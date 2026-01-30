import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';
import { useEffect } from 'react';

const ImageModal = ({ imagePath, onClose }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className={styles.container} onClick={handleClick}>
      <div className={`${styles.wrapper} anim-scale-up`}>
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
