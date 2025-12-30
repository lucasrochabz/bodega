import { GET_USER, POST_USERS } from '../api/users';

const usersService = {
  getUser: (request) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_USER(token);
    return request(url, options);
  },

  signup: (request, userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { usersService };
