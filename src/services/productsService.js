import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../api/products';

const productsService = {
  getAllProducts: ({ page, pageSize, request }) => {
    const { url, options } = GET_ALL_PRODUCTS(page, pageSize);
    return request(url, options);
  },

  getProduct: ({ productId, request }) => {
    const { url, options } = GET_PRODUCT(productId);
    return request(url, options);
  },
};

export { productsService };
