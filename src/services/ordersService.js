import { GET_ORDER_ID, GET_MY_ORDERS } from '../api/ordersApi';
import { request } from '../http/request';

const ordersService = {
  getOrder: (orderId) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ORDER_ID(token, orderId);
    return request(url, options);
  },

  getOrders: () => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_MY_ORDERS(token);
    return request(url, options);
  },
};

export { ordersService };
