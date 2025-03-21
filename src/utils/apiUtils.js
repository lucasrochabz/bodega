import { BASE_API_URL } from '../../config';

const POST_LOGIN = (body) => {
  return {
    url: BASE_API_URL + '/api/auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const GET_USER = (token) => {
  return {
    url: BASE_API_URL + '/api/users/user',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const POST_USERS = (body) => {
  return {
    url: BASE_API_URL + '/api/users',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const PUT_USER_UPDATE = (token, body) => {
  return {
    url: BASE_API_URL + '/api/users/update',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

const GET_PRODUCTS = () => {
  return {
    url: BASE_API_URL + '/api/products',
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
    url: BASE_API_URL + '/api/products' + `/${productId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

const GET_ORDER_ID = (orderId) => {
  return {
    url: BASE_API_URL + '/api/orders/details' + `/${orderId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

const GET_ORDERS_USER = (token) => {
  return {
    url: BASE_API_URL + '/api/orders/user',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const POST_ORDERS = (token, body) => {
  return {
    url: BASE_API_URL + '/api/orders',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

const PUT_ORDER_UPDATE = (orderId, body) => {
  return {
    url: BASE_API_URL + `/api/orders/${orderId}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const GET_ADDRESS_DATA = (zipCode) => {
  return {
    url: `https://viacep.com.br/ws/${zipCode}/json`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

export {
  POST_LOGIN,
  GET_USER,
  POST_USERS,
  PUT_USER_UPDATE,
  GET_PRODUCTS,
  GET_PRODUCT_ID,
  GET_ORDER_ID,
  GET_ORDERS_USER,
  PUT_ORDER_UPDATE,
  POST_ORDERS,
  GET_ADDRESS_DATA,
};
