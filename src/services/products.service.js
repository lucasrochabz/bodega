import { apiClient } from './http/client';

const productsService = {
  getAllProducts: async (page, pageSize, options = {}) => {
    const response = await apiClient(
      `/api/v1/products?page=${page}&pageSize=${pageSize}`,
      { ...options, method: 'GET' },
    );

    return response.data;
  },

  getProduct: async (productId, options = {}) => {
    const response = await apiClient(`/api/v1/products/${productId}`, {
      ...options,
      method: 'GET',
    });

    return response.data;
  },
};

export { productsService };
