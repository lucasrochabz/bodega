import { GET_ME, POST_LOGIN } from '../api/authApi';
import { POST_USERS, PUT_USER_UPDATE } from '../api/usersApi';

import { request } from '../http/request';

const authService = {
  getMe: async (token) => {
    const { url, options } = GET_ME(token);
    return request(url, options);
  },

  login: async (body) => {
    const { url, options } = POST_LOGIN(body);
    return request(url, options);
  },

  update: async (token, body) => {
    const { url, options } = PUT_USER_UPDATE(token, body);
    return request(url, options);
  },

  // fix: acho que essa função tem que ir para usersService
  signup: (userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { authService };
