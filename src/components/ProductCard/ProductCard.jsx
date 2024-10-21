import notebook from '../../assets/images/notebook-2.jpg';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = () => {
    alert(`Clicou no Produto: ${item.name}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={notebook} alt={item.name} />
      <p className="price">{item.price}</p>
      <h2 className="title" key={item.id}>
        {item.name}
      </h2>
      <p>{item.descricao}</p>
    </div>
  );
};
