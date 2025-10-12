import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { formattedPriceToBRL } from '../../utils/priceUtils';
import './ProductCard.css';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${ROUTES.PRODUCT_DETAILS_BASE}/${item.id}`);
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

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
