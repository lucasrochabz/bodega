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

  const isAbsoluteUrl = endpoint.startsWith('http');
  const url = isAbsoluteUrl ? endpoint : `${BASE_API_URL}${endpoint}`;

  return request(url, config);
};
