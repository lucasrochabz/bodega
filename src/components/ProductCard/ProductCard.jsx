import './ProductCard.css';

export const ProductCard = ({ item }) => {
  const handleClick = () => {
    const productPath = `/products/${item.id}`;
    window.location.href = productPath;
  };

  const imagePath = `/src/assets/images/${item.image_path}`;

  return (
    <div onClick={handleClick} className="product-card">
      <img src={`${imagePath}.jpg`} alt={item.product_name} />
      <div className="product-info">
        <p className="price">R$ {item.price}</p>
        <h2 className="title" key={item.id}>
          {item.product_name}
        </h2>
        <p className="descricao">{item.description}</p>
      </div>
    </div>
  );
};
