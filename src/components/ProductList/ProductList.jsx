import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const product = [
    {
      id: 1,
      name: 'Mesa',
      price: 10,
      descricao: 'Mesa zerada',
    },
    {
      id: 2,
      name: 'Cadeira',
      price: 15,
      descricao: 'Cadeira aprovado pela Nasa',
    },
    {
      id: 3,
      name: 'Banco',
      price: 5,
      descricao: 'O melhor que tá tendo',
    },
  ];

  return (
    <div className="product-list">
      {product.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
