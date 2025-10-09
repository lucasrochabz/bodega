import PropTypes from 'prop-types';
import './ImageModal.css';

const ImageModal = ({ imagePath, onClose }) => {
  return (
    <section className="image-modal-container">
      <div className="image-modal">
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
