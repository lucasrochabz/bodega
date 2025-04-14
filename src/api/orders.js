import { BASE_API_URL } from '../../config';

const GET_ORDER_ID = (orderId) => {
  return {
    url: `${BASE_API_URL}/api/orders/${orderId}`,
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
    url: `${BASE_API_URL}/api/orders/user`,
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
    url: `${BASE_API_URL}/api/orders`,
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
    url: `${BASE_API_URL}/api/orders/${orderId}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export { GET_ORDER_ID, GET_ORDERS_USER, POST_ORDERS, PUT_ORDER_UPDATE };
