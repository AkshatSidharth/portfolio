
import { useEffect } from 'react';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-gray-600 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none">
                    Akshat
                    <br />
                    <span className="font-light italic">Sidharth</span>
                  </h1>
                  
                  <div className="flex items-center gap-4 mt-8">
                    <div className="h-px bg-gray-300 w-16"></div>
                    <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
                      Technical Product Manager
                    </p>
                  </div>
                </div>

                <div className="max-w-2xl space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p className="font-light">
                    I am a Technical Product Manager with over <span className="font-medium text-gray-900">three years of experience</span> leading the development of digital products that deliver real-world impact.
                  </p>
                  
                  <p className="font-light">
                    My expertise spans across <span className="font-medium text-gray-900">software as a service platforms, educational technology, and sports technology</span>, where I focus on solving complex problems with clarity, structure, and creativity.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-none hover:scale-105 transition-all duration-300 group" 
                    asChild
                  >
                    <a href="https://drive.google.com/uc?export=download&id=1u5_FAY3eRnE9MG4WmXVIWyu3dhKtlhx_" download>
                      <Download className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Download Resume
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 py-4 rounded-none hover:scale-105 transition-all duration-300" 
                    asChild
                  >
                    <a href="mailto:akshatsid36@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Side Stats */}
            <div className="lg:col-span-4">
              <div className="space-y-8 lg:pl-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider">YEARS</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider">PRODUCTS</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider">AVG GROWTH</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider">INDUSTRIES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-sm font-mono text-gray-600 tracking-wider">RECENT WORK</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <div className="bg-white p-8 md:p-12 hover:shadow-lg transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  Proem Sports
                </h3>
                <p className="text-lg text-gray-600 font-light">Associate Technical Product Manager</p>
                <p className="text-sm font-mono text-gray-500 mt-2">MAY 2024 – PRESENT</p>
              </div>
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 p-0 group-hover:translate-x-2 transition-all duration-300" 
                asChild
              >
                <a href="/experience">
                  <span className="mr-2">View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-light max-w-4xl">
              Leading the development of next-generation data-driven solutions for the sports and entertainment industry, 
              focusing on enhancing fan experiences and optimizing athlete performance through innovative technology platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's Create Something
              <br />
              <span className="font-light italic">Extraordinary</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              I'm always interested in discussing product strategy, digital transformation, 
              and opportunities to create meaningful impact through technology.
            </p>
            
            <div className="flex justify-center space-x-8 pt-8">
              <a 
                href="mailto:akshatsid36@gmail.com" 
                className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-mono text-gray-600">EMAIL</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/akshat-sidharth/" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-mono text-gray-600">LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
