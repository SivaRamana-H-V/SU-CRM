import api from '../axios';

export const startupApi = {
  // Get all startups
  getAllStartups: (params) => api.get('/startups', { params }),
  
  // Get startup by ID
  getStartupById: (id) => api.get(`/startups/${id}`),
  
  // Create new startup
  createStartup: (startupData) => api.post('/startups', startupData),
  
  // Update startup
  updateStartup: (id, startupData) => api.put(`/startups/${id}`, startupData),
  
  // Delete startup
  deleteStartup: (id) => api.delete(`/startups/${id}`),
  
  // Get startup KPIs
  getStartupKpis: (id, params) => api.get(`/startups/${id}/kpis`, { params }),
  
  // Get startup team members
  getStartupTeam: (id) => api.get(`/startups/${id}/team`),
  
  // Add team member to startup
  addTeamMember: (id, userData) => api.post(`/startups/${id}/team`, userData),
  
  // Remove team member from startup
  removeTeamMember: (id, userId) => api.delete(`/startups/${id}/team/${userId}`),
  
  // Get startup documents
  getStartupDocuments: (id) => api.get(`/startups/${id}/documents`),
  
  // Upload document for startup
  uploadDocument: (id, formData) => api.post(`/startups/${id}/documents`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  
  // Delete startup document
  deleteDocument: (id, documentId) => api.delete(`/startups/${id}/documents/${documentId}`),
  
  // Get startup analytics
  getStartupAnalytics: (id, params) => api.get(`/startups/${id}/analytics`, { params }),
  
  // Get startup categories/industries
  getStartupCategories: () => api.get('/startup-categories'),
};

export default startupApi; 