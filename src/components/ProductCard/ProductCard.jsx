import { useNavigate } from 'react-router-dom';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${item.id}`);
  };

  const imagePath = `/src/assets/images/${item.image_path}`;

  return (
    <div onClick={handleClick} className="product-card">
      <img src={imagePath} alt={item.name} />
      <div className="product-info">
        <p className="price">{formattedPriceToBRL(item.price)}</p>
        <h2 className="title" key={item.id}>
          {item.name}
        </h2>
        <p className="descricao">{item.description}</p>
      </div>
    </div>
  );
};
