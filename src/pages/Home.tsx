
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <div className="mb-6">
                <div className="line-indicator"></div>
                <span className="text-medium-grey text-sm">Product Manager</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Akshat <span className="text-medium-grey">Sidharth</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-dark-grey max-w-2xl">
                Product Manager with expertise in customer data platforms, user engagement, 
                and building data-driven digital experiences that deliver measurable business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/files/resume.pdf" size="lg">Download Resume</Button>
                <Button href="/experience" variant="outline" size="lg">View Experience</Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="h-64 w-64 md:h-80 md:w-80 relative">
                <div className="absolute inset-0 border-2 border-dark-grey rounded-md"></div>
                <div className="absolute inset-0 border-2 border-dark-grey rounded-md transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-light-grey rounded-md transform translate-x-2 translate-y-2"></div>
                <div className="bg-white rounded-md h-full w-full flex items-center justify-center relative z-10 shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20 text-medium-grey">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-white py-16 px-4 border-y border-light-grey/20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center mb-2">
              <div className="line-indicator"></div>
              <span className="text-medium-grey text-sm">My Experience</span>
            </div>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>

          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="relative pl-8 pb-8 border-l border-light-grey/50">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-dark-grey"></div>
              <div className="mb-2">
                <span className="text-xs text-medium-grey bg-light-grey/30 px-2 py-1 rounded-full">May 2024 – Present</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Associate Technical Product Manager</h3>
              <p className="text-medium-grey mb-3">Proem Sports, Bengaluru, India</p>
              <ul className="space-y-2 text-sm text-dark-grey">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Led the development of a Customer Data & Engagement Platform, integrating omnichannel engagement campaigns builder, resulting in a 30% increase in user stickiness on our client's marketing campaigns and 16% faster event data processing.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Engineered a predictive analytics module for sports, using ML to enhance athlete performance by 15% and support expansion into new markets.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Optimized the e-commerce marketplace strategy for a sports merchandise client, leveraging data-driven user insights and personalized engagement campaigns, leading to a 28% increase in merchandise sales.</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8 pb-8 border-l border-light-grey/50">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-dark-grey"></div>
              <div className="mb-2">
                <span className="text-xs text-medium-grey bg-light-grey/30 px-2 py-1 rounded-full">June 2023 – May 2024</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Associate Product Manager</h3>
              <p className="text-medium-grey mb-3">AntWalk (YC 22), Bengaluru, India</p>
              <ul className="space-y-2 text-sm text-dark-grey">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Designed analytical dashboards for BFSI clients, improving compliance tracking and risk management, which led a 20% improvement in their workforce performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Implemented an ML-powered recommendation engine for personalized learning, increasing course completion rates by 19% and user retention by 14% by tailoring content to individual learners learning patterns.</span>
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="relative pl-8 border-l border-light-grey/50">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-dark-grey"></div>
              <div className="mb-2">
                <span className="text-xs text-medium-grey bg-light-grey/30 px-2 py-1 rounded-full">January 2022 – June 2023</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Associate Product Manager</h3>
              <p className="text-medium-grey mb-3">Think Talent Services, Gurgaon, India</p>
              <ul className="space-y-2 text-sm text-dark-grey">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Conducted market research to identify customer pain points, informing key product and marketing strategies that contributed to a 11% market share increase and a 16% boost in customer satisfaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Launched a customizable digital assessment tool, improving flexibility and driving a 24% increase in user engagement and a 17% enhancement in user experience.</span>
                </li>
              </ul>
              <Link to="/experience" className="inline-flex items-center mt-4 text-sm text-dark-grey hover:text-off-black transition-colors">
                View full experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center mb-2">
              <div className="line-indicator"></div>
              <span className="text-medium-grey text-sm">My Expertise</span>
            </div>
            <h2 className="text-3xl font-bold">Key Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover-lift">
              <div className="w-8 h-8 bg-light-grey/50 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-dark-grey">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Product Strategy</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Product Strategy & Roadmaps</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Feature Prioritization</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Market Research</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Competitive Analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="card hover-lift">
              <div className="w-8 h-8 bg-light-grey/50 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-dark-grey">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">User Experience</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>User Research</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Journey Mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Usability Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>UI/UX Design</span>
                </li>
              </ul>
            </div>
            
            <div className="card hover-lift">
              <div className="w-8 h-8 bg-light-grey/50 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-dark-grey">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Data Analytics</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>A/B Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>KPI Definition & Tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Data Visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                  <span>Performance Analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white py-16 px-4 border-t border-light-grey/20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center mb-2">
              <div className="line-indicator"></div>
              <span className="text-medium-grey text-sm">Tools & Technologies</span>
            </div>
            <h2 className="text-3xl font-bold">Tools I Use</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["JIRA", "Asana", "Notion", "Google Analytics", "Amplitude", "Figma", 
              "Miro", "Tableau", "Hotjar", "Intercom", "Mixpanel", "Lucidchart"].map((tool, index) => (
              <div key={index} className="px-4 py-3 bg-white border border-light-grey/20 rounded-md text-center hover:shadow-subtle transition-all hover:border-dark-grey/30 hover-lift">
                <span className="text-sm text-dark-grey">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-0.5 bg-dark-grey"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-dark-grey mb-8 max-w-2xl mx-auto">
            Interested in discussing product strategy or exploring opportunities to work together?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" href="mailto:akshatsid36@gmail.com">Email Me</Button>
            <Button variant="outline" size="lg" href="tel:+916299291331">Call: +91 6299291331</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
