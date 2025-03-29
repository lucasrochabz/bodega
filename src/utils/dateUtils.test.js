const { setDate } = require('./dateUtils');

describe('Função setDate', () => {
  it('deve retornar a data atual no formato YYYY/MM/DD', () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const expectedDate = `${year}/${month}/${day}`;

    expect(setDate()).toBe(expectedDate);
  });
});
