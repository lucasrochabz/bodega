import { BASE_API_URL } from '../config';

const GET_MY_ORDERS = (token) => {
  return {
    url: `${BASE_API_URL}/api/v1/orders/me`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const GET_ORDER_ID = (token, orderId) => {
  return {
    url: `${BASE_API_URL}/api/v1/orders/${orderId}`,
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
    url: `${BASE_API_URL}/api/v1/orders`,
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

export { GET_MY_ORDERS, GET_ORDER_ID, POST_ORDERS };
