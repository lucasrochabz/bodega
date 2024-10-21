import './ProductDetail.css';

export const ProductDetail = () => {
  const produtos = [
    {
      id: 1,
      name: 'Notebook1',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Smartphone1',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      quantity: 10,
    },
    {
      id: 3,
      name: 'Câmera1',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      quantity: 10,
    },
    {
      id: 4,
      name: 'Smartwatch1',
      price: 'R$ 4.000,00',
      descricao:
        'O Smartwatch combina estilo e funcionalidade, monitorando sua saúde e conectando você ao mundo.',
      quantity: 10,
    },
    {
      id: 5,
      name: 'Tablet1',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      quantity: 10,
    },
    {
      id: 6,
      name: 'Tablet2',
      price: 'R$ 5.200,00',
      descricao:
        'O Tablet é perfeito para entretenimento e trabalho, oferecendo versatilidade em um design compacto.',
      quantity: 10,
    },
    {
      id: 7,
      name: 'Câmera2',
      price: 'R$ 3.800,00',
      descricao:
        'A Câmera proporciona imagens de alta qualidade, capturando momentos únicos com precisão incrível.',
      quantity: 10,
    },
    {
      id: 8,
      name: 'Smartphone2',
      price: 'R$ 2.400,00',
      descricao:
        'O Smartphone oferece tecnologia avançada e recursos inovadores para facilitar o seu dia a dia.',
      quantity: 10,
    },
    {
      id: 9,
      name: 'Notebook2',
      price: 'R$ 1.200,00',
      descricao:
        'O Notebook é ideal para quem busca desempenho e portabilidade em um único aparelho.',
      quantity: 10,
    },
  ];

  const produtoEncontrado = produtos.find(
    (produto) => (produto.name = produtoNome),
  );

  return (
    <>
      <h2>ProductDetail</h2>
      <h2>Detalhes do produto: {produtoNome}</h2>
      <h1>{produtoEncontrado.name}</h1>
      <p>Preço: {produtoEncontrado.price}</p>
    </>
  );
};
