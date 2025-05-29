
import { useEffect } from 'react';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="mb-24">
          <div className="mb-8">
            <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
              Akshat Sidharth
            </h1>
            <h2 className="text-2xl font-light text-gray-600 mb-12 tracking-wide">
              Technical Product Manager
            </h2>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              I am a Technical Product Manager with over three years of experience leading the development of digital products that deliver real-world impact. My expertise spans across software as a service platforms, educational technology, and sports technology, where I focus on solving complex problems with clarity, structure, and creativity.
            </p>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              Throughout my journey, I have successfully taken multiple products from concept to launch, combining a deep understanding of user behavior with technical and analytical rigor. My work includes building predictive analytics platforms that improve athlete performance, designing personalized learning engines that increase user engagement, and optimizing digital marketplaces through data-driven insights.
            </p>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-16">
              I believe in the power of cross-functional collaboration, continuous learning, and building with empathy. My approach centers on aligning business goals with user needs to create products that are not only functional but also meaningful.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-normal px-8 py-4 rounded-md text-lg" 
              asChild
            >
              <a href="https://drive.google.com/uc?export=download&id=1u5_FAY3eRnE9MG4WmXVIWyu3dhKtlhx_" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-normal px-8 py-4 rounded-md text-lg" 
              asChild
            >
              <a href="mailto:akshatsid36@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Experience Preview */}
        <div className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-12 tracking-tight">
            Recent Experience
          </h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Proem Sports</h3>
                <p className="text-lg text-gray-600 font-light mb-2">Associate Technical Product Manager</p>
                <p className="text-sm text-gray-500">May 2024 – Present • Bengaluru, India</p>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Leading the development of next-generation data-driven solutions for the sports and entertainment industry, focusing on enhancing fan experiences and optimizing athlete performance.
              </p>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 p-0" asChild>
                <a href="/experience">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-2xl">
            I'm always interested in discussing product strategy, digital transformation, and opportunities to create meaningful impact through technology.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:akshatsid36@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/akshat-sidharth/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
