import api from './axios';
import authApi from './endpoints/auth';
import kpiApi from './endpoints/kpi';
import startupApi from './endpoints/startup';

export {
  api as default,
  authApi,
  kpiApi,
  startupApi
}; 