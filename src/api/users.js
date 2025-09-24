import { BASE_API_URL } from '../../config';

const GET_USER = (token) => {
  return {
    url: `${BASE_API_URL}/api/v1/users/user`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const POST_USERS = (body) => {
  return {
    url: `${BASE_API_URL}/api/v1/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

const PUT_USER_UPDATE = (token, body) => {
  return {
    url: `${BASE_API_URL}/api/v1/users/update`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

export { GET_USER, POST_USERS, PUT_USER_UPDATE };
