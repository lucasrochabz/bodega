import { GET_USER } from '../api/users';

const usersService = {
  getUser: (request) => {
    const token = localStorage.getItem('token');

    const { url, options } = GET_USER(token);
    request(url, options);
  },
};

export { usersService };
