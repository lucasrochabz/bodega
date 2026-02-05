import { POST_USERS } from '../api/usersApi';

const usersService = {
  signup: (request, userData) => {
    const { url, options } = POST_USERS(userData);
    return request(url, options);
  },
};

export { usersService };
