
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mono-ghost py-12 mt-16 border-t border-mono-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h4 className="font-heading text-xl font-medium mb-4">Akshat Sidharth</h4>
            <p className="text-sm text-mono-slate max-w-xs mb-6">
              Product Manager with expertise in customer data platforms, analytics, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:akshatsid36@gmail.com" 
                className="text-mono-slate hover:text-mono-black transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akshat-sidharth/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-mono-slate hover:text-mono-black transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-mono-slate hover:text-mono-black transition-colors" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h5 className="font-medium text-sm uppercase tracking-wider text-mono-gray mb-4">Navigation</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-mono-slate hover:text-mono-black transition-colors">Home</Link></li>
              <li><Link to="/experience" className="text-sm text-mono-slate hover:text-mono-black transition-colors">Experience</Link></li>
              <li><Link to="/freelance" className="text-sm text-mono-slate hover:text-mono-black transition-colors">Freelance</Link></li>
              <li><Link to="/case-studies" className="text-sm text-mono-slate hover:text-mono-black transition-colors">Case Studies</Link></li>
              <li><Link to="/projects" className="text-sm text-mono-slate hover:text-mono-black transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h5 className="font-medium text-sm uppercase tracking-wider text-mono-gray mb-4">Get in Touch</h5>
            <a 
              href="mailto:akshatsid36@gmail.com"
              className="group flex items-center justify-between p-4 bg-mono-white rounded-lg border border-mono-light hover:border-mono-silver transition-all duration-300"
            >
              <div>
                <p className="font-medium mb-1">Ready to discuss opportunities?</p>
                <p className="text-sm text-mono-slate">Let's connect via email</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-mono-gray group-hover:text-accent-teal transition-colors duration-300" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-mono-light mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-mono-gray">© {currentYear} Akshat Sidharth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
