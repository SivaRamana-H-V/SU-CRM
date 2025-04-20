// import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, Target, Award, FileText, RefreshCcw, ChevronRight, BarChart2, Clock } from 'lucide-react';

// Sample data
const monthlyRevenueData = [
    { month: 'Jan', revenue: 12000, target: 10000 },
    { month: 'Feb', revenue: 15000, target: 12000 },
    { month: 'Mar', revenue: 18000, target: 15000 },
    { month: 'Apr', revenue: 16000, target: 17000 },
    { month: 'May', revenue: 21000, target: 20000 },
    { month: 'Jun', revenue: 25000, target: 22000 },
];

const customerAcquisitionData = [
    { month: 'Jan', customers: 24 },
    { month: 'Feb', customers: 32 },
    { month: 'Mar', customers: 45 },
    { month: 'Apr', customers: 53 },
    { month: 'May', customers: 61 },
    { month: 'Jun', customers: 72 },
];

const kpiData = [
    { name: 'Revenue', percentage: 85, color: '#4f46e5' },
    { name: 'Customers', percentage: 92, color: '#16a34a' },
    { name: 'Retention', percentage: 78, color: '#eab308' },
    { name: 'CAC', percentage: 65, color: '#ef4444' },
];

// KPI Card Component
const KPICard = ({ icon, title, value, change, isPositive, color }) => {
    const Icon = icon;
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
            <div className={`h-1 w-full`} style={{ backgroundColor: color }}></div>
            <div className="p-5">
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">{title}</p>
                        <p className="text-2xl font-bold mt-1">{value}</p>
                    </div>
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
                        <Icon size={22} color={color} />
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <TrendingUp
                        size={16}
                        className={isPositive ? 'text-green-500' : 'text-red-500'}
                    />
                    <span
                        className={`ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium`}
                    >
                        {change}% {isPositive ? 'increase' : 'decrease'}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">from last month</span>
                </div>
            </div>
        </div>
    );
};

// Progress Bar Component
const ProgressBar = ({ name, percentage, color }) => {
    return (
        <div className="mb-5">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{name}</span>
                <span className="text-sm font-medium" style={{ color }}>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                    className="h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

// Document Item Component
const DocumentItem = ({ icon, title, date, color }) => {
    return (
        <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
            <div className={`p-3 rounded-lg mr-4 ${color}`}>
                {icon}
            </div>
            <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">{title}</h3>
                <p className="text-xs text-gray-500">{date}</p>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                View <ChevronRight size={16} className="ml-1" />
            </button>
        </div>
    );
};

// Chart Section Component
const ChartSection = ({ title, subtitle, children }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm">
                    <RefreshCcw size={14} className="mr-1" />
                    Refresh
                </button>
            </div>
            {children}
        </div>
    );
};

const StartupDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Startup Dashboard</h1>
                    <p className="text-gray-600 mt-1">Welcome back! Here's a snapshot of your business performance.</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <KPICard
                        icon={TrendingUp}
                        title="Monthly Revenue"
                        value="$25,000"
                        change="12"
                        isPositive={true}
                        color="#4f46e5"
                    />
                    <KPICard
                        icon={Users}
                        title="Total Customers"
                        value="72"
                        change="15"
                        isPositive={true}
                        color="#16a34a"
                    />
                    <KPICard
                        icon={Target}
                        title="CAC"
                        value="$850"
                        change="5"
                        isPositive={false}
                        color="#eab308"
                    />
                    <KPICard
                        icon={Award}
                        title="Retention Rate"
                        value="78%"
                        change="3"
                        isPositive={true}
                        color="#ef4444"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <ChartSection 
                        title="Revenue vs Target" 
                        subtitle="Monthly performance comparison"
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={monthlyRevenueData}>
                                <defs>
                                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: 'white', 
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                                        border: 'none' 
                                    }} 
                                />
                                <Legend />
                                <Area 
                                    type="monotone" 
                                    dataKey="revenue" 
                                    stroke="#4f46e5" 
                                    fill="url(#revenueGradient)" 
                                    name="Revenue ($)" 
                                    activeDot={{ r: 6 }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="target" 
                                    stroke="#16a34a" 
                                    fill="url(#targetGradient)" 
                                    name="Target ($)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartSection>

                    <ChartSection 
                        title="Customer Acquisition" 
                        subtitle="New customers per month"
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={customerAcquisitionData}>
                                <defs>
                                    <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#16a34a" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0.4} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: 'white', 
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                                        border: 'none' 
                                    }} 
                                />
                                <Legend />
                                <Bar 
                                    dataKey="customers" 
                                    fill="url(#customerGradient)" 
                                    name="New Customers" 
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartSection>
                </div>

                {/* KPI Progress and Documents */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold text-gray-800">KPI Targets</h2>
                            <div className="bg-indigo-50 p-2 rounded-full">
                                <BarChart2 size={18} className="text-indigo-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            {kpiData.map((item, index) => (
                                <ProgressBar
                                    key={index}
                                    name={item.name}
                                    percentage={item.percentage}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Recent Documents</h2>
                                <p className="text-sm text-gray-500 mt-1">Latest files and reports</p>
                            </div>
                            <div className="bg-indigo-50 p-2 rounded-full">
                                <FileText size={18} className="text-indigo-600" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <DocumentItem
                                icon={<FileText size={20} className="text-blue-600" />}
                                title="Q2 Financial Report"
                                date="Updated 2 days ago"
                                color="bg-blue-50"
                            />

                            <DocumentItem
                                icon={<FileText size={20} className="text-green-600" />}
                                title="Marketing Strategy"
                                date="Updated 1 week ago"
                                color="bg-green-50"
                            />

                            <DocumentItem
                                icon={<FileText size={20} className="text-yellow-600" />}
                                title="Investor Presentation"
                                date="Updated 2 weeks ago"
                                color="bg-yellow-50"
                            />
                            
                            <div className="pt-2 text-center">
                                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center mx-auto">
                                    View All Documents <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupDashboard; 