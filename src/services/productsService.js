import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../api/products';
import { request } from '../http/request';

const productsService = {
  // fix: simular error na api para ver o que acontece
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
