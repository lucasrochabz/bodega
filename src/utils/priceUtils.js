const formattedPriceToBRL = (price) => {
  const numericPrice = parseFloat(price);

  if (isNaN(numericPrice)) return 'Valor inválido';

  const formattedPrice = numericPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedPrice;
};

module.exports = { formattedPriceToBRL };
