import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, Search, Menu, User, Settings, LogOut } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const menuRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsNotificationsOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between animate-fade-in">
        <div className="flex items-center lg:w-64">
          <button 
            className="p-2 rounded-lg text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 transition duration-150 lg:hidden" 
            onClick={toggleSidebar}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 ml-2 lg:ml-0">
            IncuTrack<span className="text-gray-900">Pro</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className={`relative w-full transition-all duration-300 ${searchFocused ? 'ring-2 ring-indigo-300' : ''}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:bg-white"
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 md:space-x-3">
          {user && (
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-full text-gray-600 hover:text-indigo-700 hover:bg-indigo-50 transition relative"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-40">
                  <div className="p-3 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">3 new</span>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {[1, 2, 3].map((item) => (
                      <a key={item} href="#" className="block p-4 hover:bg-gray-50 border-b border-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                            {item}
                          </div>
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-800">New startup added</p>
                            <p className="text-xs text-gray-500 mt-0.5">TechVision AI has been added to your portfolio.</p>
                            <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-100 bg-gray-50 text-center">
                    <a href="#" className="text-xs font-medium text-indigo-600 hover:underline">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-label="User menu"
              >
                <div className="h-9 w-9 rounded-full bg-indigo-100 ring-2 ring-white flex items-center justify-center text-indigo-700 font-semibold overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover rounded-full" />
                  ) : (
                    user.name?.charAt(0).toUpperCase() || 'U'
                  )}
                </div>
                <div className="hidden md:block text-sm text-left">
                  <div className="font-semibold text-gray-800">{user.name || 'User'}</div>
                  <div className="text-xs text-gray-500 -mt-0.5">{user.role || 'Member'}</div>
                </div>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-40">
                  <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                      {user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-800">{user.name || 'User'}</p>
                      <p className="text-xs text-gray-500">{user.email || 'user@example.com'}</p>
                    </div>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User size={16} className="mr-3 text-gray-500" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings size={16} className="mr-3 text-gray-500" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="mr-3 text-gray-500" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link 
                to="/login" 
                className="py-2 px-4 text-sm text-indigo-600 font-medium hover:text-indigo-700 rounded-md"
              >
                Log In
              </Link>
              <Link 
                to="/register" 
                className="py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
