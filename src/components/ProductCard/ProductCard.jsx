import './ProductCard.css';

export const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <p className="price">{item.price}</p>
      <h2 key={item.id}>{item.name}</h2>
      <p>{item.descricao}</p>
    </div>
  );
};
