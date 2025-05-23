
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-light-grey/20 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4 text-off-black relative inline-block">
              Akshat Sidharth
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-dark-grey"></span>
            </h4>
            <p className="text-medium-grey text-sm max-w-xs">
              A product manager focused on building user-centric digital experiences with a data-driven approach.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-off-black relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-dark-grey"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-medium-grey hover:text-off-black transition-colors">Home</Link></li>
              <li><Link to="/experience" className="text-medium-grey hover:text-off-black transition-colors">Experience</Link></li>
              <li><Link to="/freelance" className="text-medium-grey hover:text-off-black transition-colors">Freelance</Link></li>
              <li><Link to="/case-studies" className="text-medium-grey hover:text-off-black transition-colors">Case Studies</Link></li>
              <li><Link to="/projects" className="text-medium-grey hover:text-off-black transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-off-black relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-dark-grey"></span>
            </h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-medium-grey hover:text-off-black transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-medium-grey hover:text-off-black transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="mailto:akshatsid36@gmail.com" className="text-medium-grey hover:text-off-black transition-colors" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2 text-off-black">Contact</h5>
              <div className="space-y-1">
                <p className="text-medium-grey text-sm">+91 6299291331</p>
                <a href="mailto:akshatsid36@gmail.com" className="text-medium-grey hover:text-off-black transition-colors text-sm">akshatsid36@gmail.com</a>
                <p className="text-medium-grey text-sm">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-light-grey/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-medium-grey">© {currentYear} Akshat Sidharth. All rights reserved.</p>
          <p className="text-xs text-medium-grey mt-2 md:mt-0">
            <a href="#" className="hover:text-off-black transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-off-black transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
