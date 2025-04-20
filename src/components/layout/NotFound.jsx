import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, LifeBuoy, MessageSquare } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
      <div className="text-center max-w-lg mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-gray-200">
        {/* Animated Illustration Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            {/* Simple animated placeholder */} 
             <div className="absolute inset-0 rounded-full bg-primary-100 opacity-50 animate-pulse"></div> 
             <div className="absolute inset-4 rounded-full bg-primary-200 opacity-60 animate-pulse animation-delay-200"></div> 
             <div className="absolute inset-8 rounded-full bg-primary-300 opacity-70 animate-pulse animation-delay-400"></div> 
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl sm:text-8xl font-bold text-primary-600">404</h1>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Oops! Page Not Found</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          The page you were looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        {/* Search box */}
        <div className="relative max-w-sm mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="search" 
            className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out text-sm"
            placeholder="Search the site..."
          />
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            <Home size={16} className="-ml-0.5 mr-2" />
            Go to Dashboard
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            <ArrowLeft size={16} className="-ml-0.5 mr-2" />
            Go Back
          </button>
        </div>
        
        {/* Help links */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600 mb-4">Need help? Try these resources:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link 
              to="/help"
              className="flex items-center text-primary-600 hover:text-primary-800 hover:underline text-sm font-medium transition-colors duration-200"
            >
              <LifeBuoy size={14} className="mr-1.5" />
              Help Center
            </Link>
            <Link 
              to="/contact"
              className="flex items-center text-primary-600 hover:text-primary-800 hover:underline text-sm font-medium transition-colors duration-200"
            >
              <MessageSquare size={14} className="mr-1.5" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 