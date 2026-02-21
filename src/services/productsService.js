import { apiClient } from '../http/client';

const productsService = {
  // fix: simular error na api para ver o que acontece
  getAllProducts: ({ page, pageSize }) => {
    return apiClient(`/api/v1/products?page=${page}&pageSize=${pageSize}`, {
      method: 'GET',
    });
  },

  getProduct: (productId) => {
    return apiClient(`/api/v1/products/${productId}`, {
      method: 'GET',
    });
  },
};

export { productsService };
