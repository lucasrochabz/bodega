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
};

export { addressService };
