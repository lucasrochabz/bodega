const { formattedPriceToBRL } = require('./priceUtils');

describe('formattedPriceToBRL', () => {
  test('deve formatar o preço corretamente para BRL', () => {
    const result = formattedPriceToBRL(123);
    const predicted = 'R$ 123,00';

    expect(result).toEqual(predicted);
  });
});
