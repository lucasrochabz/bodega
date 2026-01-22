import { GET_ME, POST_LOGIN } from '../api/auth';
import { POST_USERS } from '../api/users';

const authService = {
  getMe: async (token) => {
    const { url, options } = GET_ME(token);
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || 'Erro ao buscar usuário.');
    }

    return json;
  },

  login: async (body) => {
    const { url, options } = POST_LOGIN(body);
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || 'Erro ao fazer login.');
    }

    return json;
  },

  // fix: acho que essa função tem que ir para usersService
  signup: (request, userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { authService };
