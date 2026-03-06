import { apiClient } from './client';

export const get = (url) => {
  apiClient(url, { method: 'GET' });
};
