import { GET_ORDER_ID, GET_MY_ORDERS, POST_ORDERS } from '../api/orders';
import { request } from '../http/request';

const ordersService = {
  getOrder: (orderId) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDER_ID(token, orderId);
    return request(url, options);
  },

  getMyOrders: () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_MY_ORDERS(token);
    return request(url, options);
  },

  createOrder: (payload) => {
    const token = localStorage.getItem('token');
    const { url, options } = POST_ORDERS(token, payload);

    return request(url, options);
  },
};

export { ordersService };
