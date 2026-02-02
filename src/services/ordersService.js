import { GET_ORDER_ID, GET_MY_ORDERS } from '../api/orders';

const ordersService = {
  getOrder: ({ orderId, request }) => {
    const { url, options } = GET_ORDER_ID(orderId);
    return request(url, options);
  },

  getOrders: (request) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_MY_ORDERS(token);
    return request(url, options);
  },
};

export { ordersService };
