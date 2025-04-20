import api from '../axios';

export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  
  register: (userData) => api.post('/auth/register', userData),
  
  logout: () => api.post('/auth/logout'),
  
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  
  resetPassword: (data) => api.post('/auth/reset-password', data),
  
  verifyEmail: (token) => api.get(`/auth/verify-email/${token}`),
  
  getCurrentUser: () => api.get('/auth/me'),
  
  updateProfile: (userData) => api.put('/auth/profile', userData),
  
  changePassword: (passwordData) => api.post('/auth/change-password', passwordData),
};

export default authApi; 