import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = () => {
    const url = `/products/${item.id}`;
    window.location.href = url;
  };

  return (
    <div onClick={handleClick} className="product-card">
      <img
        src={`/src/assets/images/${item.image_path}-1.jpg`}
        alt={item.name}
      />
      <div className="product-info">
        <p className="price">R$ {item.price}</p>
        <h2 className="title" key={item.id}>
          {item.name}
        </h2>
        <p className="descricao">{item.description}</p>
      </div>
    </div>
  );
};
