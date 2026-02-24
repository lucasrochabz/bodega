import { apiClient } from '../http/client';

const paymentsService = {
  // fix: pensar em mudar esse nome
  checkout: (payload) => {
    return apiClient('/api/v1/payments/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};

export { paymentsService };
