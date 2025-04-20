import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart2, Users, Briefcase, Award, ChevronRight, Play, Sparkles, Activity, TrendingUp, Zap, Shield } from 'lucide-react';
import CountUp from 'react-countup';

const LandingPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        setIsVisible(true); // Trigger animation on component mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <BarChart2 className="h-7 w-7 text-black-600" />,
            title: "Advanced Analytics",
            description: "Visualize and track key performance indicators with real-time dashboards and reports."
        },
        {
            icon: <Users className="h-7 w-7 text-black-600" />,
            title: "Startup Management",
            description: "Streamline operations for tracking and supporting multiple startups in your portfolio."
        },
        {
            icon: <Briefcase className="h-7 w-7 text-black-600" />,
            title: "Resource Allocation",
            description: "Efficiently manage and distribute resources among startups based on performance metrics."
        },
        {
            icon: <Award className="h-7 w-7 text-black-600" />,
            title: "Success Tracking",
            description: "Monitor startup success rates and outcomes with comprehensive tracking tools."
        }
    ];

    const testimonials = [
        {
            quote: "IncuTrack Pro transformed how we monitor our startups' performance metrics. We can now make data-driven decisions quickly.",
            author: "Jane Cooper",
            role: "CEO, TechHub Incubator"
        },
        {
            quote: "The ability to track KPIs in real-time has been invaluable for our incubator. We've seen a 40% improvement in resource allocation.",
            author: "Alex Rodriguez",
            role: "Director, Innovation Center"
        }
    ];

    const stats = [
        {
            icon: <TrendingUp className="h-7 w-7 text-black-600" />,
            value: 500,
            label: "Active Incubators",
            suffix: "+"
        },
        {
            icon: <Users className="h-7 w-7 text-black-600" />,
            value: 12000,
            label: "Startups Tracked",
            prefix: "+"
        },
        {
            icon: <Zap className="h-7 w-7 text-black-600" />,
            value: 98,
            label: "Customer Satisfaction",
            suffix: "%"
        },
        {
            icon: <Shield className="h-7 w-7 text-black-600" />,
            value: 35,
            label: "Increased Success Rate",
            suffix: "%"
        }
    ];

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section with Enhanced Visuals */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-800 to-purple-900 text-white min-h-screen flex items-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-15"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            transform: `translateY(${scrollPosition * 0.2}px)`
                        }}
                    ></div>

                    {/* Floating circles - improved positioning and colors */}
                    <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-8 py-28 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-16 lg:mb-0">
                            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                                <span className="inline-flex items-center rounded-full bg-indigo-100 bg-opacity-20 px-4 py-1.5 text-sm font-medium text-indigo-100 mb-8">
                                    <Sparkles className="mr-1.5 h-4 w-4 text-black" />
                                    <span className='text-black'>The Next Generation Incubator Platform</span>
                                </span>
                                <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                                    Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-200 to-yellow-100">Incubator</span> <br />
                                    <span className="relative">
                                        with Data-Driven Insights
                                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 9C128.957 -1.19936 242.914 -1.83609 355 9" stroke="#F472B6" strokeWidth="5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </h1>
                                <p className="text-xl mb-10 text-indigo-100 max-w-2xl leading-relaxed">
                                    Empower your incubator with real-time analytics, startup performance tracking, and comprehensive resource management—all in one powerful platform.
                                </p>
                                <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
                                    <Link
                                        to="/register"
                                        className="btn px-8 py-4 bg-white text-indigo-700 hover:bg-indigo-50 rounded-lg font-semibold shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center text-lg"
                                    >
                                        Get Started Free
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    <Link
                                        to="#demo-video"
                                        className="btn px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                                    >
                                        <Play className="mr-2 h-5 w-5" />
                                        Watch Demo
                                    </Link>
                                </div>

                                <div className="mt-14 flex items-center">
                                    <div className="flex -space-x-3">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className={`w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-indigo-${400 + i * 100} to-purple-${500 + i * 100} flex items-center justify-center text-sm font-bold shadow-lg`}>
                                                {String.fromCharCode(65 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ml-5">
                                        <div className="flex items-center">
                                            <div className="text-yellow-300 flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className="ml-2 text-sm font-medium text-white">From <span className="font-bold">500+</span> reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                                <div className="relative">
                                    {/* Main dashboard card - improved design */}
                                    <div className="bg-white p-3 rounded-2xl shadow-2xl transform hover:-rotate-1 transition-all duration-300">
                                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl overflow-hidden">
                                            <div className="flex justify-between items-center mb-6">
                                                <div>
                                                    <h3 className="text-white font-semibold">Startup Performance Dashboard</h3>
                                                    <p className="text-gray-400 text-sm">Quarterly Growth Metrics</p>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                                                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                                                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Performance metrics - improved layout */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                                    <div className="text-gray-400 text-xs mb-2">Total Startups</div>
                                                    <div className="text-white text-2xl font-bold mb-2">42</div>
                                                    <div className="flex items-center text-green-400 text-xs">
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                                        </svg>
                                                        <span>+12% from last quarter</span>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                                    <div className="text-gray-400 text-xs mb-2">Avg. Growth</div>
                                                    <div className="text-white text-2xl font-bold mb-2">38%</div>
                                                    <div className="flex items-center text-green-400 text-xs">
                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                                        </svg>
                                                        <span>+5% from target</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Performance bars - improved style */}
                                            <div className="space-y-5">
                                                <div className="w-full">
                                                    <div className="flex justify-between text-xs mb-2">
                                                        <span className="text-gray-400">TechVision AI</span>
                                                        <span className="text-white font-medium">92%</span>
                                                    </div>
                                                    <div className="h-2.5 bg-gray-700 rounded-full">
                                                        <div className="h-2.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ width: '92%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="flex justify-between text-xs mb-2">
                                                        <span className="text-gray-400">EcoSolutions</span>
                                                        <span className="text-white font-medium">78%</span>
                                                    </div>
                                                    <div className="h-2.5 bg-gray-700 rounded-full">
                                                        <div className="h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '78%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="flex justify-between text-xs mb-2">
                                                        <span className="text-gray-400">FinEdge</span>
                                                        <span className="text-white font-medium">65%</span>
                                                    </div>
                                                    <div className="h-2.5 bg-gray-700 rounded-full">
                                                        <div className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '65%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating side cards - improved design */}
                                    <div className="absolute -right-16 top-1/3 bg-gray-50 p-5 rounded-lg shadow-xl transform rotate-6 z-20 w-64 opacity-95 border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Activity className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Investment Tracker</h4>
                                                <p className="text-xs text-gray-500">Real-time funding status</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Monthly Goal</span>
                                                <span className="text-sm font-bold text-gray-800">$240K</span>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full">
                                                <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                            <p className="text-xs text-blue-600 font-medium">85% of monthly goal reached</p>
                                        </div>
                                    </div>

                                    <div className="absolute -left-12 bottom-10 bg-gray-50 p-5 rounded-lg shadow-xl transform -rotate-3 z-20 w-64 opacity-95 border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <Users className="h-5 w-5 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Mentorship Stats</h4>
                                                <p className="text-xs text-gray-500">Mentor engagements</p>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-green-50 p-2.5 rounded text-center border border-green-100">
                                                    <div className="text-2xl font-bold text-green-600">24</div>
                                                    <div className="text-xs text-gray-600">Active Mentors</div>
                                                </div>
                                                <div className="bg-blue-50 p-2.5 rounded text-center border border-blue-100">
                                                    <div className="text-2xl font-bold text-blue-600">86</div>
                                                    <div className="text-xs text-gray-600">Sessions/Mo</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated floating elements for visual interest */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-70 transform rotate-12 blur-2xl animate-pulse"></div>
                                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-purple-500 rounded-full opacity-70 transform rotate-45 blur-2xl animate-pulse animation-delay-2000"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                        <path fill="#F9FAFB" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Features Section - Improved UI */}
            <section className="py-28 bg-black-50 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute right-0 top-0 h-72 w-72 bg-black-300 rounded-full -mr-32 -mt-32 opacity-50"></div>
                    <div className="absolute left-0 bottom-0 h-72 w-72 bg-black-300 rounded-full -ml-32 -mb-32 opacity-50"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="text-black-600 font-semibold uppercase tracking-wider text-sm">Powerful capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900 leading-tight">Everything You Need to Drive Growth</h2>
                        <div className="h-1.5 w-24 bg-black-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our comprehensive suite of tools enables you to manage, track, and grow your startup portfolio with data-driven insights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Feature card with hover effect - improved design */}
                                <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:bg-gradient-to-br from-white to-black-50 h-full border border-gray-100">
                                    {/* Icon container - improved design */}
                                    <div className="bg-black-50 group-hover:bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:shadow-md border border-black-100 group-hover:border-black-200">
                                        <div className="text-black-600">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-black-700 transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                                    {/* Learn more link - improved design */}
                                    <div className="mt-6 pt-3 border-t border-gray-100 group-hover:border-black-100">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-black-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            Learn more
                                            <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Feature number - improved design */}
                                <div className="absolute -top-4 -right-4 bg-black-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transform transition-transform group-hover:scale-110 group-hover:bg-black-700">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Added CTA button - improved design */}
                    <div className="text-center mt-20">
                        <Link to="/register" className="inline-flex items-center px-8 py-4 bg-black-600 text-black rounded-lg shadow-xl hover:bg-black-700 transition-all duration-300 font-semibold text-lg border border-black-500">
                            Explore all features
                            <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with enhanced design */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background pattern (Removed for cleaner look with white bg) */}
                {/* <div className="absolute inset-0 z-0 opacity-30" 
// ... (removed background pattern style) ...
                ></div> */}

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-black-600 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">Trusted by Leading Incubators</h2>
                        <div className="h-1 w-20 bg-black-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600">
                            Discover why incubator managers worldwide choose IncuTrack Pro for their performance tracking needs.
                        </p>
                    </div>

                    {/* Updated testimonials layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg relative hover:shadow-xl transition-all duration-300"
                            >
                                {/* Quote icon */}
                                <div className="absolute -top-5 -left-5 w-12 h-12 bg-black-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>

                                {/* Star rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

                                <div className="flex items-center border-t pt-4 border-gray-100">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-gradient-to-br from-black-400 to-black-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                                        <p className="text-black-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Client logos */}
                    <div className="mt-20">
                        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by innovative organizations</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                            {/* Simple logo placeholders */}
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-md w-32"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-24 bg-gradient-to-r from-indigo-300 to-indigo-900 text-white relative overflow-hidden">
                {/* Background animation */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 -right-10 w-72 h-72 bg-white opacity-10 rounded-full"></div>
                    <div className="absolute bottom-0 -left-20 w-96 h-96 bg-white opacity-10 rounded-full"></div>

                    {/* Animated particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, index) => {
                            const size = Math.floor(Math.random() * 6) + 2;
                            const left = `${Math.floor(Math.random() * 100)}%`;
                            const top = `${Math.floor(Math.random() * 100)}%`;
                            const animDuration = Math.floor(Math.random() * 20) + 10;
                            return (
                                <div
                                    key={index}
                                    className="absolute rounded-full bg-white opacity-30"
                                    style={{
                                        width: `${size}px`,
                                        height: `${size}px`,
                                        left,
                                        top,
                                        animation: `float ${animDuration}s infinite ease-in-out`
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Incubator?</h2>
                            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                                Join hundreds of incubators already using IncuTrack Pro to optimize their operations and drive startup success.
                            </p>
                        </div>

                        {/* Two-column CTA layout */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-100">Start your 14-day free trial</h3>
                                    <p className="text-gray-200">
                                        Get full access to all features. No credit card required.
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        {['Unlimited startups', 'Real-time analytics', 'Custom reporting', 'Expert support'].map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/3">
                                    <Link
                                        to="/register"
                                        className="w-full bg-white text-gray-900 hover:bg-black-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        Get Started For Free
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="w-full mt-4 border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        Request Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <section className="py-20 bg-black-50 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-black-500 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-black-600 font-semibold uppercase tracking-wider text-sm">By The Numbers</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
                            Driving Measurable Results
                        </h2>
                        <div className="h-1 w-20 bg-black-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600">
                            IncuTrack Pro has helped incubators worldwide achieve remarkable outcomes for their startups.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden hover:scale-105 transition-all duration-300 border border-gray-100 group"
                            >
                                {/* Accent element */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black-400 to-black-600 transform group-hover:h-2 transition-all duration-300"></div>

                                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-black-50 rounded-lg text-black-600 mx-auto">
                                    {stat.icon}
                                </div>

                                <h3 className="text-4xl font-bold mb-2 text-center text-gray-900">
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2.5}
                                        separator=","
                                        suffix={stat.suffix || ''}
                                        prefix={stat.prefix || ''}
                                    />
                                </h3>

                                <p className="text-center text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage; 
