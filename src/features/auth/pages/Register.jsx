import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { Mail, Lock, User, Building, ArrowRight, UserPlus } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationType: 'incubator',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    setError('');
    setLoading(true);
    try {
      const { name, email, password, organizationType } = formData;
      await register({ name, email, password, organizationType });
      navigate(organizationType === 'incubator' ? '/incubator' : '/startup');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-50 to-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-black-100">
            <UserPlus className="h-8 w-8 text-black-600" />
          </div>
          <h2 className="text-2xl font-bold mt-4 text-gray-900">Create your account</h2>
          <p className="mt-1 text-sm text-gray-500">Join our platform to get started</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg text-sm focus:ring-black-500 focus:border-black-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg text-sm focus:ring-black-500 focus:border-black-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg text-sm focus:ring-black-500 focus:border-black-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg text-sm focus:ring-black-500 focus:border-black-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
            <div className="flex space-x-4">
              {['incubator', 'startup'].map((type) => (
                <label
                  key={type}
                  className={`flex-1 flex flex-col items-center py-3 rounded-lg border cursor-pointer transition-all ${formData.organizationType === type ? 'bg-black-100 border-black-500 text-black-700' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <input
                    type="radio"
                    name="organizationType"
                    value={type}
                    checked={formData.organizationType === type}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {type === 'incubator' ? <Building className="h-6 w-6 mb-1" /> : <ArrowRight className="h-6 w-6 mb-1" />}
                  <span className="text-sm font-medium capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-black" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Creating...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;