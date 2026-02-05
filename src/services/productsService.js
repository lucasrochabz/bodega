import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../api/productsApi';
import { request } from '../http/request';

const productsService = {
  getAllProducts: ({ page, pageSize }) => {
    const { url, options } = GET_ALL_PRODUCTS(page, pageSize);
    return request(url, options);
  },

  getProduct: (productId) => {
    const { url, options } = GET_PRODUCT(productId);
    return request(url, options);
  },
};

export { productsService };
