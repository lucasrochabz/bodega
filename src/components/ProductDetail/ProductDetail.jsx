import { useParams } from 'react-router-dom';
import notebook from '../../assets/images/notebook-2.jpg';
import './ProductDetail.css';
import { useEffect, useState } from 'react';

export const ProductDetail = () => {
  const [estoque, setEstoque] = useState(0);

  const { path } = useParams();

  const produtos = [
    {
      id: 1,
      name: 'Notebook',
      path: 'notebook-1',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      stock: 10,
    },
    {
      id: 2,
      name: 'Smartphone',
      path: 'smartphone-1',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      stock: 10,
    },
    {
      id: 3,
      name: 'Câmera',
      path: 'camera-1',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      stock: 10,
    },
    {
      id: 4,
      name: 'Smartwatch',
      path: 'smartwatch-1',
      price: 'R$ 4.000,00',
      descricao:
        'O Smartwatch combina estilo e funcionalidade, monitorando sua saúde e conectando você ao mundo.',
      stock: 10,
    },
    {
      id: 5,
      name: 'Tablet',
      path: 'tablet-1',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      stock: 10,
    },
    {
      id: 6,
      name: 'Tablet',
      path: 'tablet-2',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      stock: 10,
    },
    {
      id: 7,
      name: 'Câmera',
      path: 'camera-2',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      stock: 10,
    },
    {
      id: 8,
      name: 'Smartphone',
      path: 'smartphone-2',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      stock: 10,
    },
    {
      id: 9,
      name: 'Notebook',
      path: 'notebook-2',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      stock: 10,
    },
  ];

  const produtoEncontrado = produtos.find((produto) => (produto.path = path));

  const handleTesteCarregar = () => {
    setEstoque(produtoEncontrado.stock);
  };

  const handleTesteBuy = () => {
    setEstoque((prevEstoque) => prevEstoque - 1);
  };

  useEffect(() => {
    handleTesteCarregar();
  }, []);

  return (
    <div className="product-detail">
      <img src={notebook} alt={produtoEncontrado.name} />

      <div className="product-detail-info">
        <h2>Detalhes do produto: {path}</h2>
        <h1>{produtoEncontrado.name}</h1>
        <p className="info-prince">{produtoEncontrado.price}</p>
        <p className="info-descricao">{produtoEncontrado.descricao}</p>
        <p>Estoque: {estoque}</p>
        {/* <button onClick={handleTesteCarregar}>Carregar</button> */}
        <button onClick={handleTesteBuy}>Comprar</button>
      </div>
    </div>
  );
};
