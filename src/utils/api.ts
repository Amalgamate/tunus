import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  register: (userData: { email: string; password: string; name: string }) =>
    api.post('/auth/register', userData),
  verifyEmail: (token: string) =>
    api.post('/auth/verify-email', { token }),
};

export const membershipAPI = {
  subscribe: (tier: string) =>
    api.post('/membership/subscribe', { tier }),
  cancel: () =>
    api.post('/membership/cancel'),
  getDetails: () =>
    api.get('/membership/details'),
};

export const perksAPI = {
  getAll: () =>
    api.get('/perks'),
  getByTier: (tier: string) =>
    api.get(`/perks/tier/${tier}`),
  claim: (perkId: string) =>
    api.post(`/perks/${perkId}/claim`),
};

export default api;