
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
                <span className="block text-pro-gray font-normal">Specializing in data-driven solutions</span>
              </h1>
              <div className="text-lg mb-8 text-pro-gray max-w-2xl space-y-4">
                <p>
                  I am a Technical Product Manager with over three years of experience leading the development of digital products that deliver real-world impact. My expertise spans across software as a service platforms, educational technology, and sports technology, where I focus on solving complex problems with clarity, structure, and creativity.
                </p>
                <p>
                  Throughout my journey, I have successfully taken multiple products from concept to launch, combining a deep understanding of user behavior with technical and analytical rigor. My work includes building predictive analytics platforms that improve athlete performance, designing personalized learning engines that increase user engagement, and optimizing digital marketplaces through data-driven insights.
                </p>
                <p>
                  I believe in the power of cross-functional collaboration, continuous learning, and building with empathy. My approach centers on aligning business goals with user needs to create products that are not only functional but also meaningful.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="https://drive.google.com/uc?export=download&id=1u5_FAY3eRnE9MG4WmXVIWyu3dhKtlhx_" target="_blank" rel="noopener noreferrer">
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
              <div className="bg-gradient-to-tr from-pro-light-silver to-pro-off-white rounded-full h-64 w-64 md:h-80 md:w-80 flex items-center justify-center overflow-hidden p-1 animate-pulse-subtle">
                <div className="bg-pro-white rounded-full h-full w-full flex items-center justify-center">
                  {/* Profile image placeholder */}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-pro-light-gray">
                    <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-pro-charcoal text-pro-white mt-12">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-pro-white">Let's Connect</h2>
          <p className="text-pro-light-gray mb-8 max-w-2xl mx-auto">
            Interested in discussing product management opportunities or collaborating on a project?
            I'm always open to connecting with fellow professionals.
          </p>
          <Button size="lg" variant="outline" className="bg-transparent text-pro-white border-pro-light-gray hover:bg-pro-dark-gray/20" asChild>
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
