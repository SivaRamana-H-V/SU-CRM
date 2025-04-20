import React from 'react';
import {
  BarChart2,
  UserCheck,
  BookOpen,
  Archive,
  DollarSign,
  Calendar,
  PieChart,
  Settings,
  ArrowRight,
  Users,
  TrendingUp,
  CheckCircle,
  Activity
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, BarChart, Bar } from 'recharts';
import { cn } from '../../../utils/cn';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Sample data for the charts
const startupSurvivalData = [
  { name: 'Year 1', value: 85 },
  { name: 'Year 2', value: 65 },
  { name: 'Year 3', value: 45 },
  { name: 'Year 5', value: 25 }
];

const revenueGrowthData = [
  { month: 'Jan', cohort1: 4000, cohort2: 2400 },
  { month: 'Feb', cohort1: 3000, cohort2: 1398 },
  { month: 'Mar', cohort1: 2000, cohort2: 9800 },
  { month: 'Apr', cohort1: 2780, cohort2: 3908 },
  { month: 'May', cohort1: 1890, cohort2: 4800 },
  { month: 'Jun', cohort1: 2390, cohort2: 3800 }
];

// Feature cards for quick access
const featureCards = [
  {
    title: 'Dashboard',
    description: 'View your incubator performance at a glance',
    icon: Activity,
    color: 'bg-gray-50 text-gray-700',
    link: '/dashboard'
  },
  {
    title: 'KRA/KPI Management',
    description: 'Track and manage key performance indicators',
    icon: BarChart2,
    color: 'bg-blue-50 text-blue-700',
    link: '/kpis'
  },
  {
    title: 'Startup Portfolio',
    description: 'Manage and monitor your startup companies',
    icon: Archive,
    color: 'bg-indigo-50 text-indigo-700',
    link: '/startups'
  },
  {
    title: 'Mentor Network',
    description: 'Connect startups with industry mentors',
    icon: Users,
    color: 'bg-purple-50 text-purple-700',
    link: '/mentors'
  },
  {
    title: 'Resource Management',
    description: 'Allocate and track incubator resources',
    icon: BookOpen,
    color: 'bg-green-50 text-green-700',
    link: '/resources'
  },
  {
    title: 'Funding Tracker',
    description: 'Monitor investments and funding opportunities',
    icon: DollarSign,
    color: 'bg-yellow-50 text-yellow-700',
    link: '/funding'
  },
  {
    title: 'Events Calendar',
    description: 'Schedule and manage upcoming activities',
    icon: Calendar,
    color: 'bg-orange-50 text-orange-700',
    link: '/events'
  },
  {
    title: 'Reports & Analytics',
    description: 'Generate insights from your incubator data',
    icon: PieChart,
    color: 'bg-red-50 text-red-700',
    link: '/reports'
  },
  {
    title: 'Settings & Administration',
    description: 'Configure your incubator platform',
    icon: Settings,
    color: 'bg-slate-50 text-slate-700',
    link: '/settings'
  }
];

// Recent activity data
const recentActivities = [
  {
    id: 1,
    type: 'startup',
    title: 'New startup joined',
    description: 'TechInnovate has been added to your portfolio',
    timestamp: '2 hours ago',
    icon: Users,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 2,
    type: 'funding',
    title: 'Funding milestone achieved',
    description: 'EcoSolutions secured Series A funding of $2M',
    timestamp: '5 hours ago',
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 3,
    type: 'mentor',
    title: 'Mentor session completed',
    description: 'John Doe completed mentoring session with 3 startups',
    timestamp: '1 day ago',
    icon: CheckCircle,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    type: 'event',
    title: 'Upcoming event reminder',
    description: 'Investor Pitch Day scheduled for next week',
    timestamp: '2 days ago',
    icon: Calendar,
    color: 'bg-yellow-100 text-yellow-600'
  }
];

// KPI Card Component
const KPICard = (props) => {
  const { title, value, icon: Icon, description, change, trend } = props;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        {change && (
          <div className="flex items-center mt-2">
            <span className={cn("text-xs font-medium",
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            )}>
              {trend === 'up' ? '+' : '-'}{change}
            </span>
            {trend === 'up' ?
              <TrendingUp className="h-3 w-3 ml-1 text-green-600" /> :
              <Activity className="h-3 w-3 ml-1 text-red-600" />
            }
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Feature Card Component
const FeatureCard = (props) => {
  const { title, description, icon: Icon, color, link } = props;
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-black-200">
      <CardContent className="p-6">
        <div className={`mt-3 w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg mb-2">{title}</CardTitle>
        <CardDescription className="text-sm mb-4">{description}</CardDescription>
        <Button
          variant="ghost"
          size="sm"
          className="mt-auto text-black-600 hover:text-black-700 p-0 h-auto font-medium"
          onClick={() => window.location.href = link}
        >
          <span className="flex items-center">
            View details <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};

// Activity Item Component
const ActivityItem = (props) => {
  const { icon: Icon, title, description, timestamp, color } = props;
  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className={`${color} p-2 rounded-full mr-3`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">{title}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const IncubatorDashboard = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Incubator Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening with your startups today.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Export Data</Button>
          <Button>View Reports</Button>
        </div>
      </div>

      {/* KPI Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Active Startups"
          value="28"
          change="+2"
          trend="up"
          icon={Archive}
        />
        <KPICard
          title="Funding Secured"
          value="$4.2M"
          change="+$0.8M"
          trend="up"
          icon={DollarSign}
        />
        <KPICard
          title="Mentor Sessions"
          value="43"
          change="+12"
          trend="up"
          icon={UserCheck}
        />
        <KPICard
          title="Success Rate"
          value="68%"
          change="+5%"
          trend="up"
          icon={TrendingUp}
        />
      </div>

      {/* Performance Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Startup Survival Rate</CardTitle>
            <CardDescription>Percentage of startups active after specified time periods</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={startupSurvivalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Survival Rate (%)" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth Comparison</CardTitle>
            <CardDescription>Current vs previous cohort monthly revenue growth</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cohort1" name="Current Cohort" stroke="#3b82f6" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="cohort2" name="Previous Cohort" stroke="#9ca3af" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Feature Cards */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            link={card.link}
          />
        ))}
      </div>

      {/* Recent Activity & Upcoming Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your incubator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  icon={activity.icon}
                  title={activity.title}
                  description={activity.description}
                  timestamp={activity.timestamp}
                  color={activity.color}
                />
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Activity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Schedule for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-medium">Pitch Practice Session</h4>
                  <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                  <div className="flex items-center mt-1">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">12 startups</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Users className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-medium">Mentor Matching Event</h4>
                  <p className="text-sm text-gray-500">Wed, 10:00 AM</p>
                  <div className="flex items-center mt-1">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">8 mentors, 15 startups</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-50 p-3 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium">Investor Demo Day</h4>
                  <p className="text-sm text-gray-500">Fri, 1:00 PM</p>
                  <div className="flex items-center mt-1">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">6 investors, 10 startups</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View Full Calendar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IncubatorDashboard; 