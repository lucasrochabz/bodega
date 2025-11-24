import { GET_ORDER_ID, GET_ORDERS_USER } from '../api/orders';

const ordersService = {
  getOrder: ({ orderId, request }) => {
    const { url, options } = GET_ORDER_ID(orderId);
    return request(url, options);
  },

  getOrders: (request) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDERS_USER(token);
    return request(url, options);
  },
};

export { ordersService };
