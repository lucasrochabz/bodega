import { GET_ME, POST_FORGOT_PASSWORD, POST_LOGIN } from '../api/auth';
import { POST_USERS, PATCH_USER_UPDATE } from '../api/users';
import { request } from '../http/request';

const authService = {
  getMe: async (token) => {
    const { url, options } = GET_ME(token);
    return request(url, options);
  },

  login: async (payload) => {
    const { url, options } = POST_LOGIN(payload);
    return request(url, options);
  },

  update: async (token, payload) => {
    const { url, options } = PATCH_USER_UPDATE(token, payload);
    return request(url, options);
  },

  forgotPassword: (email) => {
    const origin = window.location.origin;
    const { url, options } = POST_FORGOT_PASSWORD({ email, origin });

    return request(url, options);
  },

  // fix: acho que essa função tem que ir para usersService
  signup: (userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { authService };
