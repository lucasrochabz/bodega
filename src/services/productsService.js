import { GET_PRODUCTS } from '../api/products';

const productsService = {
  getProducts: (page, pageSize, request) => {
    const { url, options } = GET_PRODUCTS(page, pageSize);
    return request(url, options);
  },
};

export { productsService };
