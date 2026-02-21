import { apiClient } from '../http/client';

const ordersService = {
  getMyOrders: () => {
    return apiClient('/api/v1/orders/me', {
      method: 'GET',
    });
  },

  getOrder: (orderId) => {
    return apiClient(`/api/v1/orders/${orderId}`, {
      method: 'GET',
    });
  },

  createOrder: (payload) => {
    return apiClient('/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};

export { ordersService };
