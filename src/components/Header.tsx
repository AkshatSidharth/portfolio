
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Freelance', path: '/freelance' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-500 backdrop-blur-lg ${
        scrolled ? 'bg-white/80 shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="font-mono text-lg sm:text-xl font-bold tracking-tighter hover:scale-105 transition-transform duration-300"
          >
            AS<span className="text-gray-500">.</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide relative group transition-all duration-300 ${
                  isActive(item.path) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <a 
              href="mailto:akshatsid36@gmail.com" 
              className="px-4 lg:px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col space-y-4 animate-fade-in border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium py-2 ${
                  isActive(item.path) ? 'text-gray-900' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="mailto:akshatsid36@gmail.com" 
              className="mt-4 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full text-center hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
