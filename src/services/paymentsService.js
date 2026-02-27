import { apiClient } from '../http/client';

const paymentsService = {
  // fix: pensar em mudar esse nome
  checkout: async (payload) => {
    const response = await apiClient('/api/v1/payments/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return response.data;
  },
};

export { paymentsService };
