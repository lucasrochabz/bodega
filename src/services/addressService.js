import { GET_ADDRESS_DATA } from '../api/addressApi';
import { request } from '../http/request';

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
    return request(url, options);
  },
};

export { addressService };
