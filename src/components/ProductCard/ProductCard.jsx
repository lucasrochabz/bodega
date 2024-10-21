import notebook from '../../assets/images/notebook-2.jpg';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = () => {
    // teste fazer função para transformar em minuscula
    const url = `/produto/${item.name}`;
    window.location.href = url;
  };

  return (
    <div className="product-card">
      <img src={notebook} alt={item.name} />
      <p className="price">{item.price}</p>
      <h2 className="title" key={item.id}>
        {item.name}
      </h2>
      <p>{item.descricao}</p>
      <p>Estoque: {item.quantity}</p>
      <ButtonBuy handleClick={handleClick} text={'Comprar'} />
    </div>
  );
};
