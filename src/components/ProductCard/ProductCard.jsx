import { useNavigate } from 'react-router-dom';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${item.id}`);
  };

  const images = import.meta.glob('/src/assets/images/*', {
    eager: true,
  });

  const imagePath = images[`/src/assets/images/${item.image_path}`].default;

  return (
    <div onClick={handleNavigate} className="product-card">
      <img src={imagePath} alt={item.name} />
      <div className="product-info">
        <p className="price">{formattedPriceToBRL(item.price)}</p>
        <h2 className="title-card" key={item.id}>
          {item.name}
        </h2>
        <p className="descricao">{item.description}</p>
      </div>
    </div>
  );
};
