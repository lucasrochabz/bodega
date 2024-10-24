import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import notebook from '../../assets/images/notebook-2.jpg';
import './ProductDetail.css';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';

export const ProductDetail = () => {
  const [estoque, setEstoque] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const { path } = useParams();

  const produtos = [
    {
      id: 1,
      name: 'Notebook',
      path: 'notebook-1',
      price: 1200,
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      stock: 10,
    },
    {
      id: 2,
      name: 'Smartphone',
      path: 'smartphone-1',
      price: 2400,
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      stock: 10,
    },
    {
      id: 3,
      name: 'Câmera',
      path: 'camera-1',
      price: 3800,
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      stock: 10,
    },
    {
      id: 4,
      name: 'Smartwatch',
      path: 'smartwatch-1',
      price: 4000,
      descricao:
        'O Smartwatch combina estilo e funcionalidade, monitorando sua saúde e conectando você ao mundo.',
      stock: 10,
    },
    {
      id: 5,
      name: 'Tablet',
      path: 'tablet-1',
      price: 5200,
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      stock: 10,
    },
    {
      id: 6,
      name: 'Tablet',
      path: 'tablet-2',
      price: 5200,
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      stock: 10,
    },
    {
      id: 7,
      name: 'Câmera',
      path: 'camera-2',
      price: 3800,
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      stock: 10,
    },
    {
      id: 8,
      name: 'Smartphone',
      path: 'smartphone-2',
      price: 2400,
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      stock: 10,
    },
    {
      id: 9,
      name: 'Notebook',
      path: 'notebook-2',
      price: 1200,
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      stock: 10,
    },
  ];

  const produtoEncontrado = produtos.find((produto) => produto.path === path);

  const loadInfoProduct = () => {
    setEstoque(produtoEncontrado.stock - 1);
    setTotal(produtoEncontrado.price);
  };

  useEffect(() => {
    loadInfoProduct();
  }, []);

  const updateStock = () => {
    if (estoque < 1) {
      console.log(estoque);
      alert('Acabou!');
      return;
    }

    const newQuantity = quantity + 1;
    const newEstoque = estoque - 1;
    setEstoque(newEstoque);
    setQuantity(newQuantity);
    setTotal(produtoEncontrado.price * newQuantity);
    console.log(estoque);

    if (newEstoque === 5) {
      console.log(estoque);
      alert('Faltam 5 produtos');
    }
  };

  const formattedPrice = (number) => {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="product-detail">
      <img src={notebook} alt={produtoEncontrado.name} />

      <div className="product-detail-info">
        <h1>{produtoEncontrado.name}</h1>
        <p className="info-prince">{formattedPrice(produtoEncontrado.price)}</p>
        <p className="info-descricao">{produtoEncontrado.descricao}</p>
        <p>Estoque: {estoque}</p>
        <p>Quantidade: {quantity}</p>
        <h2 className="info-total">Total: {formattedPrice(total)}</h2>
        <ButtonBuy
          handleClick={updateStock}
          text={'Comprar'}
          isDisabled={estoque < 1}
        />
      </div>
    </div>
  );
};
