import { GET_ME, POST_LOGIN } from '../api/auth';
import { POST_USERS } from '../api/users';

const authService = {
  getMe: (request) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_ME(token);
    request(url, options);
  },

  login: async (request, body) => {
    const { url, options } = POST_LOGIN(body);
    const response = await request(url, options);

    return response;
  },

  // fix: acho que essa função tem que ir para usersService
  signup: (request, userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { authService };
