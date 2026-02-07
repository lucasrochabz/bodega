import { GET_ADDRESS_DATA } from '../api/addressApi';

const addressService = {
  getAddressData: async (zipCode) => {
    const { url, options } = GET_ADDRESS_DATA(zipCode);
    const response = await fetch(url, options);
    const cepResult = await response.json();

    if (cepResult.erro) {
      return { error: 'CEP não encontrado.' };
    }

    return {
      endereco: cepResult.logradouro,
      bairro: cepResult.bairro,
      cidade: cepResult.localidade,
      estado: cepResult.uf,
    };
  },

  // fix: acho que dá para colocar a camada http/request.js aqui
  newgetAddress: async (zipCode) => {
    const { url, options } = GET_ADDRESS_DATA(zipCode);
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Error ao buscar endereço.');
    }

    const result = await response.json();

    if (result.erro) {
      // fix: responsabilidade de emitir alert é da ui
      alert('CEP inválido.');
      throw new Error('CEP inválido.');
    }

    return result;
  },
};

export { addressService };
