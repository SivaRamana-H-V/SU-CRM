import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  BookOpen,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  UserCheck,
  Archive,
  DollarSign,
  Calendar,
  PieChart
} from 'lucide-react';
import { cn } from '../utils/cn';
import Logo from './Logo';

const navigationItems = [
  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
      }
    ]
  },
  {
    title: "Performance",
    items: [
      {
        name: "KRA/KPI Management",
        icon: BarChart2,
        path: "/kpis"
      },
      {
        name: "Reports & Analytics",
        icon: PieChart,
        path: "/reports"
      }
    ]
  },
  {
    title: "Startups & Mentors",
    items: [
      {
        name: "Startup Portfolio",
        icon: BookOpen,
        path: "/startups"
      },
      {
        name: "Mentor Network",
        icon: UserCheck,
        path: "/mentors"
      }
    ]
  },
  {
    title: "Resources",
    items: [
      {
        name: "Resource Management",
        icon: Archive,
        path: "/resources"
      },
      {
        name: "Funding Tracker",
        icon: DollarSign,
        path: "/funding"
      },
      {
        name: "Events Calendar",
        icon: Calendar,
        path: "/events"
      }
    ]
  },
  {
    title: "Administration",
    items: [
      {
        name: "User Management",
        icon: Users,
        path: "/users"
      },
      {
        name: "Documents",
        icon: FileText,
        path: "/documents"
      },
      {
        name: "Settings",
        icon: Settings,
        path: "/settings"
      },
      {
        name: "Help & Support",
        icon: HelpCircle,
        path: "/help"
      }
    ]
  }
];

const NavItem = ({ item, isActive }) => {
  const Icon = item.icon;
  
  return (
    <Link 
      to={item.path}
      className={cn(
        "flex items-center px-3.5 py-2.5 text-sm font-medium rounded-md mb-1 transition-all group",
        isActive 
          ? "bg-black-50 text-black-700" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <Icon size={20} className={cn(
        "mr-3 flex-shrink-0",
        isActive ? "text-black-600" : "text-gray-500 group-hover:text-gray-700"
      )} />
      {item.name}
    </Link>
  );
};

const NavGroup = ({ group }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  
//   const hasActiveItem = group.items.some(item => item.path === location.pathname);
  
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase"
      >
        <span>{group.title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      
      {isOpen && (
        <div className="space-y-1">
          {group.items.map((item) => (
            <NavItem 
              key={item.name} 
              item={item} 
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="px-6 py-6 border-b border-gray-200">
        <Logo className="h-8" />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {navigationItems.map((group) => (
          <NavGroup key={group.title} group={group} />
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-black-100 flex items-center justify-center text-black-700 font-medium">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 