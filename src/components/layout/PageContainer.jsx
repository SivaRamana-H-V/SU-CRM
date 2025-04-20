import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { ChevronRight, Home } from 'lucide-react';

const PageContainer = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Extract page title from path
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // Capitalize first letter and replace hyphens with spaces
      const title = pathSegments[pathSegments.length - 1]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
      setPageTitle(title);
    } else {
      setPageTitle('Dashboard');
    }
  }, [location]);
  
  // Generate breadcrumbs from path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return [];
    
    const crumbs = pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
      return { label, url };
    });
    
    // Add Home/Dashboard as the first crumb
    return [{ label: 'Dashboard', url: '/' }, ...crumbs];
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Page header with refined breadcrumbs */}
          <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-semibold text-gray-900 mb-1 sm:mb-0">{pageTitle}</h1>
              
              {breadcrumbs.length > 1 && ( // Show only if there are more crumbs than just Home/Dashboard
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-1.5 text-xs text-gray-500">
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index} className="flex items-center">
                        {index > 0 && (
                          <ChevronRight size={14} className="text-gray-400 mx-1.5 flex-shrink-0" />
                        )}
                        {index === breadcrumbs.length - 1 ? (
                          <span className="font-medium text-gray-700" aria-current="page">
                            {crumb.label}
                          </span>
                        ) : (
                          <Link 
                            to={crumb.url} 
                            className="hover:text-black-600 hover:underline transition-colors duration-200 flex items-center"
                          >
                            {index === 0 && <Home size={12} className="mr-1.5" />}
                            {crumb.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </div>
          
          {/* Main content area with padding and max-width */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageContainer; 