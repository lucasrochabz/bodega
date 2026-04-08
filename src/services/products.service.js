import { apiClient } from './http/client';

const productsService = {
  getAllProducts: async (page, pageSize, options = {}) => {
    const response = await apiClient(
      `/api/v1/products?page=${page}&pageSize=${pageSize}`,
      { ...options, method: 'GET' },
    );

    return response.data;
  },

  getProduct: async (slug, options = {}) => {
    const response = await apiClient(`/api/v1/products/${slug}`, {
      ...options,
      method: 'GET',
    });

    return response.data;
  },
};

export { productsService };
