import { Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Import pages
// Auth pages
const Login = () => <div>Login Page</div>; // Placeholder
const Register = () => <div>Register Page</div>; // Placeholder
const ForgotPassword = () => <div>Forgot Password Page</div>; // Placeholder
const ResetPassword = () => <div>Reset Password Page</div>; // Placeholder

// Dashboard
const Dashboard = () => <div>Dashboard Page</div>; // Placeholder

// Startup pages
const StartupList = () => <div>Startup List Page</div>; // Placeholder
const StartupNew = () => <div>New Startup Page</div>; // Placeholder
const StartupDetail = () => <div>Startup Detail Page</div>; // Placeholder
const StartupCategories = () => <div>Startup Categories Page</div>; // Placeholder

// KPI pages
const KPIList = () => <div>KPI List Page</div>; // Placeholder
const KPIManage = () => <div>KPI Management Page</div>; // Placeholder
const KPIReports = () => <div>KPI Reports Page</div>; // Placeholder

// User pages
const UserList = () => <div>User List Page</div>; // Placeholder
const UserNew = () => <div>New User Page</div>; // Placeholder
const UserRoles = () => <div>User Roles Page</div>; // Placeholder

// Document pages
const Documents = () => <div>Documents Page</div>; // Placeholder

// Reports pages
const Reports = () => <div>Reports Page</div>; // Placeholder

// Settings pages
const Settings = () => <div>Settings Page</div>; // Placeholder

// Help pages
const Help = () => <div>Help Page</div>; // Placeholder

// Error pages
const NotFound = () => <div>404 Not Found</div>; // Placeholder

const routes = [
    // Public routes
    {
        path: '/login',
        element: (
            <PublicRoute restricted>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: '/register',
        element: (
            <PublicRoute restricted>
                <Register />
            </PublicRoute>
        ),
    },
    {
        path: '/forgot-password',
        element: (
            <PublicRoute restricted>
                <ForgotPassword />
            </PublicRoute>
        ),
    },
    {
        path: '/reset-password/:token',
        element: (
            <PublicRoute restricted>
                <ResetPassword />
            </PublicRoute>
        ),
    },

    // Private routes
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
    },

    // Startup routes
    {
        path: '/startups',
        element: (
            <PrivateRoute>
                <StartupList />
            </PrivateRoute>
        ),
    },
    {
        path: '/startups/new',
        element: (
            <PrivateRoute>
                <StartupNew />
            </PrivateRoute>
        ),
    },
    {
        path: '/startups/:id',
        element: (
            <PrivateRoute>
                <StartupDetail />
            </PrivateRoute>
        ),
    },
    {
        path: '/startups/categories',
        element: (
            <PrivateRoute>
                <StartupCategories />
            </PrivateRoute>
        ),
    },

    // KPI routes
    {
        path: '/kpis',
        element: (
            <PrivateRoute>
                <KPIList />
            </PrivateRoute>
        ),
    },
    {
        path: '/kpis/manage',
        element: (
            <PrivateRoute>
                <KPIManage />
            </PrivateRoute>
        ),
    },
    {
        path: '/kpis/reports',
        element: (
            <PrivateRoute>
                <KPIReports />
            </PrivateRoute>
        ),
    },

    // User routes
    {
        path: '/users',
        element: (
            <PrivateRoute>
                <UserList />
            </PrivateRoute>
        ),
    },
    {
        path: '/users/new',
        element: (
            <PrivateRoute>
                <UserNew />
            </PrivateRoute>
        ),
    },
    {
        path: '/users/roles',
        element: (
            <PrivateRoute>
                <UserRoles />
            </PrivateRoute>
        ),
    },

    // Document routes
    {
        path: '/documents',
        element: (
            <PrivateRoute>
                <Documents />
            </PrivateRoute>
        ),
    },

    // Reports routes
    {
        path: '/reports',
        element: (
            <PrivateRoute>
                <Reports />
            </PrivateRoute>
        ),
    },

    // Settings routes
    {
        path: '/settings',
        element: (
            <PrivateRoute>
                <Settings />
            </PrivateRoute>
        ),
    },

    // Help routes
    {
        path: '/help',
        element: (
            <PrivateRoute>
                <Help />
            </PrivateRoute>
        ),
    },

    // Redirect root to dashboard or login
    {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
    },

    // 404 page
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;