import { apiClient } from '../http/client';

const ordersService = {
  getMyOrders: async (token) => {
    const response = await apiClient('/api/v1/orders/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  getOrder: async (token, orderId) => {
    const response = await apiClient(`/api/v1/orders/${orderId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  createOrder: async (token, payload) => {
    const response = await apiClient('/api/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    return response.data;
  },
};

export { ordersService };
