import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle,
  FileText,
  Briefcase,
  Award,
  ChevronDown,
  ChevronRight,
  X,
  LogOut,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Home size={18} />,
  },
  {
    title: 'Startups',
    path: '/startups',
    icon: <Briefcase size={18} />,
    children: [
      { title: 'All Startups', path: '/startups' },
      { title: 'Add New', path: '/startups/new' },
      { title: 'Categories', path: '/startups/categories' },
    ],
  },
  {
    title: 'KPIs',
    path: '/kpis',
    icon: <BarChart2 size={18} />,
    children: [
      { title: 'KPI Dashboard', path: '/kpis' },
      { title: 'Manage KPIs', path: '/kpis/manage' },
      { title: 'Reports', path: '/kpis/reports' },
    ],
  },
  {
    title: 'Users',
    path: '/users',
    icon: <Users size={18} />,
    children: [
      { title: 'All Users', path: '/users' },
      { title: 'Add User', path: '/users/new' },
      { title: 'Roles', path: '/users/roles' },
    ],
  },
  {
    title: 'Documents',
    path: '/documents',
    icon: <FileText size={18} />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <Award size={18} />,
  },
];

const secondaryNavItems = [
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings size={18} />,
  },
  {
    title: 'Help & Support',
    path: '/help',
    icon: <HelpCircle size={18} />,
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});
  
  // Auto-expand menu based on current location
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const basePath = '/' + pathParts[1];
    
    setExpandedItems(prev => ({
      ...prev,
      [basePath]: true
    }));
  }, [location]);
  
  const toggleExpand = (path) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300" 
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-30 flex flex-col
          transition-all duration-300 ease-in-out transform
          lg:translate-x-0 lg:static lg:w-64 lg:flex-shrink-0 
          ${isOpen ? 'translate-x-0 w-72 shadow-xl' : '-translate-x-full w-0 lg:w-64'}
        `}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base">IP</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">IncuTrack <span className="font-bold text-primary-600">Pro</span></span>
          </div>
          <button
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Main content area (scrollable) */}
        <div className="flex-1 overflow-y-auto">
          {/* Main navigation */}
          <nav className="py-6 px-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.children ? (
                    <div className="mb-1">
                      <button
                        className={`
                          w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg font-medium text-left
                          ${location.pathname.startsWith(item.path) 
                            ? 'text-primary-700 bg-primary-50' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
                          transition-colors duration-150 group
                        `}
                        onClick={() => toggleExpand(item.path)}
                        aria-expanded={!!expandedItems[item.path]}
                      >
                        <div className="flex items-center">
                          <span className={`mr-3 flex-shrink-0 w-5 h-5 ${location.pathname.startsWith(item.path) ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-150`}>
                            {item.icon}
                          </span>
                          {item.title}
                        </div>
                        <span className={`text-gray-400 transform transition-transform duration-200 ${expandedItems[item.path] ? 'rotate-90' : 'rotate-0'}`}>
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </button>
                      
                      {/* Submenu with animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItems[item.path] ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                        style={{ maxHeight: expandedItems[item.path] ? `${item.children.length * 3}rem` : '0' }} // Dynamic max-height
                      >
                        <ul className="pl-7 space-y-0.5 border-l border-gray-200 ml-6 py-1">
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <NavLink
                                to={child.path}
                                className={({ isActive }) => `
                                  block pl-4 pr-3 py-1.5 text-sm rounded-md relative
                                  before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-gray-300
                                  ${isActive 
                                    ? 'text-primary-700 font-medium bg-primary-50 before:bg-primary-600' 
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 before:hover:bg-gray-400'}
                                  transition-all duration-150
                                `}
                              >
                                {child.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center px-4 py-2.5 text-sm rounded-lg font-medium group
                        ${isActive 
                          ? 'text-primary-700 bg-primary-50' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
                        transition-colors duration-150
                      `}
                    >
                      {/* <span className={`mr-3 flex-shrink-0 w-5 h-5 ${isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-150`}>
                        {item.icon}
                      </span> */}
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Secondary navigation */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
                Support
              </div>
              <ul className="space-y-1">
                {secondaryNavItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center px-4 py-2.5 text-sm rounded-lg font-medium group
                        ${isActive 
                          ? 'text-primary-700 bg-primary-50' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
                        transition-colors duration-150
                      `}
                    >
                      {/* <span className={`mr-3 flex-shrink-0 w-5 h-5 ${isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-150`}>
                        {item.icon}
                      </span> */}
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pro upgrade banner */}
            <div className="mt-8 mx-3">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <h4 className="font-semibold text-sm">Upgrade to Pro</h4>
                  </div>
                  <p className="text-xs text-primary-100 mb-4 leading-relaxed">Unlock advanced features, reporting, and priority support.</p>
                  <button className="w-full flex items-center justify-center text-xs font-medium bg-white text-primary-700 px-3 py-2 rounded-md hover:bg-primary-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700">
                    Upgrade Now
                    <ExternalLink size={14} className="ml-1.5" />
                  </button>
                </div>
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
              </div>
            </div>
          </nav>
        </div>
          
        {/* User info - fixed at bottom */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <button className="w-full bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-9 w-9 rounded-full bg-primary-100 border border-primary-200 shadow-sm flex items-center justify-center overflow-hidden">
                  {/* Replace with actual user avatar/initials */}
                  <span className="text-primary-700 font-medium">JD</span>
                </div>
              </div>
              <div className="ml-3 flex-1 text-left">
                <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">Administrator</p>
              </div>
              <LogOut size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-150 ml-2 flex-shrink-0" />
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;