import './ProductCard.css';
// import imageTeste from '../../assets/images/image-teste.png';
import note from '../../assets/images/notebook-2.jpg';

export const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={note} alt={item.name} />
      <p className="price">{item.price}</p>
      <h2 className="title" key={item.id}>
        {item.name}
      </h2>
      <p>{item.descricao}</p>
    </div>
  );
};
