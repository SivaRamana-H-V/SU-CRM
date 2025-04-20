import { Link } from 'react-router-dom';
import { XIcon, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'X', icon: <XIcon size={18} />, url: 'https://x.com' },
    { name: 'Facebook', icon: <Facebook size={18} />, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com' },
  ];

  const productLinks = ['Features', 'Pricing', 'Integrations', 'Changelog', 'Documentation'];
  const companyLinks = ['About', 'Careers', 'Contact', 'Blog', 'Legal'];
  const policyLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-23 pb-16 relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info & Socials */}
          <div className=" sm:col-span-2 md:col-span-1">
            <Link to="/" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              IncuTrack<span className="text-gray-900">Pro</span>
            </Link>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed mt-20">
              The most comprehensive solution for incubators and accelerators to track and maximize startup success.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className='mt-20'>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className='mt-20'>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className='mt-20'>
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wider">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our newsletter.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="flex-grow bg-gray-800 py-2.5 px-4 rounded-l-md text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 py-2.5 px-4 rounded-r-md text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Subscribe to newsletter"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {currentYear} IncuTrack Pro. All rights reserved.
          </p>
          <div className="flex space-x-5">
            {policyLinks.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-xs"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 