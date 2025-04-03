import { Button } from '../Button';
import './ImageModal.css';

export const ImageModal = ({ imagePath, onClose }) => {
  return (
    <section className="image-modal-container">
      <div className="image-modal">
        <button onClick={onClose}>Fechar</button>
        <img src={imagePath} alt="" />
      </div>
    </section>
  );
};
