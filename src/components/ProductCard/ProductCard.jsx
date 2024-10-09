export const ProductCard = ({ item }) => {
  return (
    <>
      <h2 key={item.id}>{item.name}</h2>
      <p>{item.price}</p>
    </>
  );
};
