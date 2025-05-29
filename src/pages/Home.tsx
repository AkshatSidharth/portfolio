
import { useEffect } from 'react';
import { Download, Mail, Linkedin } from 'lucide-react';
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
                    I'm a strategic product leader who transforms complex technical challenges into 
                    <span className="font-medium text-gray-900"> intuitive digital experiences</span> that drive measurable business growth.
                  </p>
                  
                  <p className="font-light">
                    With expertise spanning <span className="font-medium text-gray-900">SaaS platforms, EdTech, and sports technology</span>, 
                    I specialize in bridging the gap between user needs and technical possibilities, 
                    delivering products that scale from concept to millions of users.
                  </p>
                  
                  <p className="font-light">
                    My approach combines <span className="font-medium text-gray-900">data-driven insights, user-centric design, and agile methodologies</span> 
                    to create products that not only meet market demands but anticipate future opportunities.
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

            {/* Side Stats with Labels */}
            <div className="lg:col-span-4">
              <div className="space-y-8 lg:pl-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider mb-1">YEARS</div>
                    <div className="text-xs text-gray-500 leading-tight">Professional Product Management Experience</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider mb-1">PRODUCTS</div>
                    <div className="text-xs text-gray-500 leading-tight">Digital Products Launched & Managed</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider mb-1">AVG GROWTH</div>
                    <div className="text-xs text-gray-500 leading-tight">User Engagement & Revenue Improvement</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                    <div className="text-sm font-mono text-gray-600 tracking-wider mb-1">INDUSTRIES</div>
                    <div className="text-xs text-gray-500 leading-tight">Diverse Sectors Including EdTech & SaaS</div>
                  </div>
                </div>
              </div>
            </div>
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
                href="https://www.linkedin.com/in/akshatsidharth" 
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
