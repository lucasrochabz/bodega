import { apiClient } from '../http/client';

const addressService = {
  // fix: atualizar isso para deixar igual a de baixo
  getAddressData: async (zipCode) => {
    const cepResult = await apiClient(
      `https://viacep.com.br/ws/${zipCode}/json`,
      {
        method: 'GET',
      },
    );

    if (cepResult.erro) {
      return { error: 'CEP não encontrado.' };
    }

    return {
      street: cepResult.logradouro,
      neighborhood: cepResult.bairro,
      city: cepResult.localidade,
      state: cepResult.uf,
    };
  },

  newgetAddress: (zipCode) => {
    return apiClient(`https://viacep.com.br/ws/${zipCode}/json`, {
      method: 'GET',
    });
  },
};

export { addressService };
