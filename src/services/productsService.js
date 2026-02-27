import { apiClient } from '../http/client';

const productsService = {
  // fix: simular error na api para ver o que acontece
  getAllProducts: async ({ page, pageSize }) => {
    const response = await apiClient(
      `/api/v1/products?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
      },
    );

    return response.data;
  },

  getProduct: async (productId) => {
    const response = await apiClient(`/api/v1/products/${productId}`, {
      method: 'GET',
    });

    return response.data;
  },
};

export { productsService };
