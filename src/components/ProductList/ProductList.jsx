export const ProductList = () => {
  const product = [
    {
      id: 1,
      name: 'Mesa',
      price: 10,
    },
    {
      id: 2,
      name: 'Cadeira',
      price: 15,
    },
  ];

  return (
    <>
      <h2>teste</h2>
      {product.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
};
