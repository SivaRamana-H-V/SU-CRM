// import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, Target, Award, FileText } from 'lucide-react';

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
    { name: 'Revenue', percentage: 85, color: '#0088FE' },
    { name: 'Customers', percentage: 92, color: '#00C49F' },
    { name: 'Retention', percentage: 78, color: '#FFBB28' },
    { name: 'CAC', percentage: 65, color: '#FF8042' },
];

// KPI Card Component
const KPICard = ({ icon, title, value, change, isPositive, color }) => {
    const Icon = icon;
    return (
        <div className="bg-white rounded-lg shadow-md p-5">
            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-500 font-medium">{title}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
                    <Icon size={20} color={color} />
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
    );
};

// Progress Bar Component
const ProgressBar = ({ name, percentage, color }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{name}</span>
                <span className="text-sm font-medium text-gray-700">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="h-2 rounded-full"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

const StartupDashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-6">Startup Dashboard</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    icon={TrendingUp}
                    title="Monthly Revenue"
                    value="$25,000"
                    change="12"
                    isPositive={true}
                    color="#0088FE"
                />
                <KPICard
                    icon={Users}
                    title="Total Customers"
                    value="72"
                    change="15"
                    isPositive={true}
                    color="#00C49F"
                />
                <KPICard
                    icon={Target}
                    title="CAC"
                    value="$850"
                    change="5"
                    isPositive={false}
                    color="#FFBB28"
                />
                <KPICard
                    icon={Award}
                    title="Retention Rate"
                    value="78%"
                    change="3"
                    isPositive={true}
                    color="#FF8042"
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">Revenue vs Target</h2>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={monthlyRevenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="revenue" stroke="#0088FE" fill="#0088FE" fillOpacity={0.3} name="Revenue ($)" />
                            <Area type="monotone" dataKey="target" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} name="Target ($)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">Customer Acquisition</h2>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={customerAcquisitionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="customers" fill="#00C49F" name="New Customers" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* KPI Progress and Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-lg font-medium mb-6">KPI Progress</h2>
                    {kpiData.map((item, index) => (
                        <ProgressBar
                            key={index}
                            name={item.name}
                            percentage={item.percentage}
                            color={item.color}
                        />
                    ))}
                </div>

                <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-lg font-medium mb-4">Recent Documents</h2>

                    <div className="space-y-3">
                        <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div className="p-2 bg-blue-100 rounded-md mr-3">
                                <FileText size={18} className="text-blue-600" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-sm font-medium">Q2 Financial Report</h3>
                                <p className="text-xs text-gray-500">Updated 2 days ago</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                        </div>

                        <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div className="p-2 bg-green-100 rounded-md mr-3">
                                <FileText size={18} className="text-green-600" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-sm font-medium">Marketing Strategy</h3>
                                <p className="text-xs text-gray-500">Updated 1 week ago</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                        </div>

                        <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div className="p-2 bg-yellow-100 rounded-md mr-3">
                                <FileText size={18} className="text-yellow-600" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-sm font-medium">Investor Presentation</h3>
                                <p className="text-xs text-gray-500">Updated 2 weeks ago</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupDashboard; 