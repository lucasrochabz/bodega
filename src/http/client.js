import { BASE_API_URL } from '../config';
import { request } from './request';

export const apiClient = (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  return request(`${BASE_API_URL}${endpoint}`, config);
};
