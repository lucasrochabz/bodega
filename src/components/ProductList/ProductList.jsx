import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const product = [
    {
      id: 1,
      name: 'Notebook',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
    },
    {
      id: 3,
      name: 'Câmera',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 'R$ 4.000,00',
      descricao:
        'O Smartwatch combina estilo e funcionalidade, monitorando sua saúde e conectando você ao mundo.',
    },
    {
      id: 5,
      name: 'Tablet',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
    },
    {
      id: 6,
      name: 'Tablet',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
    },
    {
      id: 7,
      name: 'Câmera',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
    },
    {
      id: 8,
      name: 'Smartphone',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
    },
    {
      id: 9,
      name: 'Notebook',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
    },
  ];

  return (
    <section className="product-list">
      {product.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};
