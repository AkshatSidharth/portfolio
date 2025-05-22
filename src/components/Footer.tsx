
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4 gradient-text">PM Portfolio</h4>
            <p className="text-medium-grey text-sm max-w-xs">
              A product manager passionate about creating user-centric digital experiences that solve real problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-medium-grey hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link to="/experience" className="text-medium-grey hover:text-accent-blue transition-colors">Experience</Link></li>
              <li><Link to="/freelance" className="text-medium-grey hover:text-accent-blue transition-colors">Freelance</Link></li>
              <li><Link to="/case-studies" className="text-medium-grey hover:text-accent-blue transition-colors">Case Studies</Link></li>
              <li><Link to="/projects" className="text-medium-grey hover:text-accent-blue transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-medium-grey hover:text-accent-blue transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-medium-grey hover:text-accent-blue transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-medium-grey hover:text-accent-blue transition-colors" aria-label="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Get in Touch</h5>
              <a href="mailto:contact@pmportfolio.com" className="text-accent-blue hover:text-accent-purple transition-colors text-sm">contact@pmportfolio.com</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-light-grey mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-medium-grey">© {currentYear} PM Portfolio. All rights reserved.</p>
          <p className="text-xs text-medium-grey mt-2 md:mt-0">
            <a href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-accent-blue transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
