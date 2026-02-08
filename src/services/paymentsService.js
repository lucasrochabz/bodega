import { POST_CHECKOUT } from '../api/paymentsApi';
import { request } from '../http/request';

const paymentsService = {
  // fix: pensar em mudar esse nome
  checkout: (payload) => {
    const { url, options } = POST_CHECKOUT(payload);
    return request(url, options);
  },
};

export { paymentsService };
