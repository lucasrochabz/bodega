import { BASE_API_URL } from '../../config';

const GET_ALL_PRODUCTS = (currentPage, pageSize) => {
  return {
    url: `${BASE_API_URL}/api/v1/products?page=${currentPage}&pageSize=${pageSize}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

const GET_PRODUCT = (productId) => {
  return {
    url: `${BASE_API_URL}/api/v1/products/${productId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

export { GET_ALL_PRODUCTS, GET_PRODUCT };
