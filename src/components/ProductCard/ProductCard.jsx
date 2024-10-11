import notebook from '../../assets/images/notebook-2.jpg';
import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = (id) => {
    console.log('clicou no card: ', id);
  };

  return (
    <div className="product-card" onClick={() => handleClick(item.id)}>
      <img src={notebook} alt={item.name} />
      <p className="price">{item.price}</p>
      <h2 className="title" key={item.id}>
        {item.name}
      </h2>
      <p>{item.descricao}</p>
    </div>
  );
};
