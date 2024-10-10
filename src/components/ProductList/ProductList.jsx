import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const product = [
    {
      id: 1,
      name: 'Mesa',
      price: 'R$ 1.200,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 2,
      name: 'Cadeira',
      price: 'R$ 2.400,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 3,
      name: 'Banco',
      price: 'R$ 3.800,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 1,
      name: 'Mesa',
      price: 'R$ 1.200,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 2,
      name: 'Cadeira',
      price: 'R$ 2.400,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 3,
      name: 'Banco',
      price: 'R$ 3.800,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 1,
      name: 'Mesa',
      price: 'R$ 1.200,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 2,
      name: 'Cadeira',
      price: 'R$ 2.400,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
    },
    {
      id: 3,
      name: 'Banco',
      price: 'R$ 3.800,00',
      descricao:
        'Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.',
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
