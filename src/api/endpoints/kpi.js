import api from '../axios';

export const kpiApi = {
  // Get all KPIs
  getAllKpis: (params) => api.get('/kpis', { params }),
  
  // Get KPI by ID
  getKpiById: (id) => api.get(`/kpis/${id}`),
  
  // Create new KPI
  createKpi: (kpiData) => api.post('/kpis', kpiData),
  
  // Update KPI
  updateKpi: (id, kpiData) => api.put(`/kpis/${id}`, kpiData),
  
  // Delete KPI
  deleteKpi: (id) => api.delete(`/kpis/${id}`),
  
  // Get KPI categories
  getKpiCategories: () => api.get('/kpi-categories'),
  
  // Get KPI metrics for dashboard
  getDashboardMetrics: () => api.get('/kpis/dashboard-metrics'),
  
  // Get KPI history for a specific KPI
  getKpiHistory: (id, params) => api.get(`/kpis/${id}/history`, { params }),
  
  // Update KPI status
  updateKpiStatus: (id, status) => api.patch(`/kpis/${id}/status`, { status }),
  
  // Add KPI comment
  addKpiComment: (id, comment) => api.post(`/kpis/${id}/comments`, { comment }),
  
  // Get KPI comments
  getKpiComments: (id) => api.get(`/kpis/${id}/comments`),
};

export default kpiApi; 