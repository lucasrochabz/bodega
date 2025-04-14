import { BASE_API_URL } from '../../config';

const GET_PRODUCTS = (currentPage, pageSize) => {
  return {
    url: `${BASE_API_URL}/api/products?page=${currentPage}&pageSize=${pageSize}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

const GET_PRODUCT_ID = (productId) => {
  return {
    url: `${BASE_API_URL}/api/products/${productId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

export { GET_PRODUCTS, GET_PRODUCT_ID };
