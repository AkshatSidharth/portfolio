
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <h1 className="font-bold mb-6 leading-tight">
                <span className="text-gradient">Product Manager</span> 
                <span className="block text-mono-slate font-normal">Specializing in data-driven solutions</span>
              </h1>
              <p className="text-lg mb-8 text-mono-slate max-w-2xl">
                I build customer data platforms, analytics solutions, and digital experiences that transform businesses and enhance user engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="/files/resume.pdf" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/experience">
                    View Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="bg-gradient-to-tr from-mono-ghost to-mono-light rounded-full h-64 w-64 md:h-80 md:w-80 flex items-center justify-center overflow-hidden p-1 animate-pulse-subtle">
                <div className="bg-mono-white rounded-full h-full w-full flex items-center justify-center">
                  {/* Profile image placeholder */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-mono-silver">
                    <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-mono-ghost border-t border-b border-mono-light">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-mono-black">3+</h3>
              <p className="text-mono-slate text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-mono-black">10+</h3>
              <p className="text-mono-slate text-sm">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-mono-black">3</h3>
              <p className="text-mono-slate text-sm">Companies</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-mono-black">20%+</h3>
              <p className="text-mono-slate text-sm">Avg. Metrics Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="w-12 h-12 bg-mono-ghost rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent-teal">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Data Platforms</h3>
              <p className="text-mono-slate text-sm">
                Building Customer Data Platforms (CDPs) that integrate user data across touchpoints to enhance personalization and engagement strategies.
              </p>
            </div>
            
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="w-12 h-12 bg-mono-ghost rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent-teal">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Analytics Solutions</h3>
              <p className="text-mono-slate text-sm">
                Developing analytics dashboards and ML-powered insights that drive business decisions and optimize performance metrics.
              </p>
            </div>
            
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="w-12 h-12 bg-mono-ghost rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent-teal">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Digital Transformation</h3>
              <p className="text-mono-slate text-sm">
                Leading product strategy for digital experiences that modernize operations and enhance customer engagement across platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 px-4 bg-mono-ghost border-t border-b border-mono-light">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Achievements</h2>
          
          <div className="space-y-6">
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-mono-ghost rounded-full flex items-center justify-center">
                  <span className="font-medium text-accent-teal">PS</span>
                </div>
                <div>
                  <h4 className="font-medium">Proem Sports</h4>
                  <p className="text-xs text-mono-gray">2024</p>
                </div>
              </div>
              <p className="text-sm text-mono-slate">
                Led development of a Customer Data & Engagement Platform that increased user stickiness by 30% and 
                improved event data processing efficiency by 16%.
              </p>
            </div>
            
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-mono-ghost rounded-full flex items-center justify-center">
                  <span className="font-medium text-accent-teal">AW</span>
                </div>
                <div>
                  <h4 className="font-medium">AntWalk (YC 22)</h4>
                  <p className="text-xs text-mono-gray">2023</p>
                </div>
              </div>
              <p className="text-sm text-mono-slate">
                Implemented ML-powered recommendation engine for personalized learning that increased course 
                completion rates by 19% and user retention by 14%.
              </p>
            </div>
            
            <div className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-mono-ghost rounded-full flex items-center justify-center">
                  <span className="font-medium text-accent-teal">TTS</span>
                </div>
                <div>
                  <h4 className="font-medium">Think Talent Services</h4>
                  <p className="text-xs text-mono-gray">2022</p>
                </div>
              </div>
              <p className="text-sm text-mono-slate">
                Formulated a data-driven SaaS pricing strategy that optimized revenue models, leading to a 30% 
                increase in average contract value.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/experience">
                View Full Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/experience" className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm hover:border-mono-silver transition-all duration-300 group">
              <h3 className="text-xl font-medium mb-3 group-hover:text-accent-teal transition-colors">Experience</h3>
              <p className="text-sm text-mono-slate mb-4">
                Explore my journey through product management roles and the impact I've made.
              </p>
              <div className="flex items-center text-mono-black font-medium text-sm">
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/case-studies" className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm hover:border-mono-silver transition-all duration-300 group">
              <h3 className="text-xl font-medium mb-3 group-hover:text-accent-teal transition-colors">Case Studies</h3>
              <p className="text-sm text-mono-slate mb-4">
                Detailed look at selected projects with challenges, processes and outcomes.
              </p>
              <div className="flex items-center text-mono-black font-medium text-sm">
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/projects" className="bg-mono-white p-6 rounded-lg border border-mono-light shadow-sm hover:border-mono-silver transition-all duration-300 group">
              <h3 className="text-xl font-medium mb-3 group-hover:text-accent-teal transition-colors">Projects</h3>
              <p className="text-sm text-mono-slate mb-4">
                Browse through the diverse range of projects I've worked on throughout my career.
              </p>
              <div className="flex items-center text-mono-black font-medium text-sm">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-mono-black text-mono-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-mono-light mb-8 max-w-2xl mx-auto">
            Interested in discussing product management opportunities or collaborating on a project?
            I'm always open to connecting with fellow professionals.
          </p>
          <Button size="lg" variant="outline" className="bg-transparent text-mono-white border-mono-slate hover:bg-mono-slate/10" asChild>
            <a href="mailto:akshatsid36@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
