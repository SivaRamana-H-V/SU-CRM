import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import IncubatorDashboard from '../features/dashboard/pages/IncubatorDashboard';
import StartupDashboard from '../features/dashboard/pages/StartupDashboard';
import LandingPage from '../features/landing/pages/LandingPage';
import NotFound from '../components/layout/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'incubator',
        element: <IncubatorDashboard />
      },
      {
        path: 'startup',
        element: <StartupDashboard />
      }
    ]
  }
]);

const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Routes; 