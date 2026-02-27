import { apiClient } from '../http/client';

const ordersService = {
  getMyOrders: async () => {
    const response = await apiClient('/api/v1/orders/me', {
      method: 'GET',
    });

    return response.data;
  },

  getOrder: async (orderId) => {
    const response = await apiClient(`/api/v1/orders/${orderId}`, {
      method: 'GET',
    });

    return response.data;
  },

  createOrder: async (payload) => {
    const response = await apiClient('/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return response.data;
  },
};

export { ordersService };
