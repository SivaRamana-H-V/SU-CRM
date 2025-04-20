import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth_token') || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load user from token
        if (token) {
            // Mock user data for now
            setUser({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                role: 'admin'
            });
        }
    }, [token]);

    const login = async (credentials) => {
        try {
            setLoading(true);
            // Mock login
            console.log(credentials);
            setToken('mock-token');
            localStorage.setItem('auth_token', 'mock-token');
            setUser({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                role: 'admin'
            });
            setError(null);
            return true;
        } catch (err) {
            setError('Login failed ' + err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setToken(null);
        setUser(null);
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            // Mock registration
            console.log(userData);
            setToken('mock-token');
            localStorage.setItem('auth_token', 'mock-token');
            setUser({
                id: 1,
                name: userData.name,
                email: userData.email,
                role: userData.organizationType === 'incubator' ? 'admin' : 'user'
            });
            setError(null);
            return true;
        } catch (err) {
            setError('Registration failed ' + err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        token,
        loading,
        error,
        isAuthenticated: !!token,
        login,
        logout,
        register,
        setError,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 