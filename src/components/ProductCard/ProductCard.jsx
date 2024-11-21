import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = () => {
    const url = `/products/${item.id}`;
    window.location.href = url;
  };

  return (
    <div className="product-card">
      <img
        src={`/src/assets/images/${item.image_path}-1.jpg`}
        alt={item.name}
      />
      <p className="price">{item.price}</p>
      <h2 className="title" key={item.id}>
        {item.name}
      </h2>
      <p className="descricao">{item.description}</p>

      <ButtonBuy handleClick={handleClick} text={'Comprar'} />
    </div>
  );
};
