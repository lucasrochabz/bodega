import { ProductCard } from '../ProductCard/ProductCard';

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
    {
      id: 3,
      name: 'Banco',
      price: 5,
    },
  ];

  return (
    <>
      {product.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
};
