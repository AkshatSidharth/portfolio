
import { useEffect } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const freelanceProjects = [
  {
    id: "motion-education",
    company: "Motion Education",
    role: "Product Consultant",
    location: "Bengaluru",
    period: "2025",
    type: "B2C Learning App",
    situation: "Motion Education's B2C learning app needed to improve user engagement and boost Return on Ad Spend (ROAS) through better user targeting and personalized interactions.",
    task: "Lead the complete integration of CleverTap into the app, setting up event tracking, user segmentation, and launching personalized engagement campaigns to optimize app performance.",
    action: "Led the end-to-end integration of CleverTap, including event instrumentation to accurately capture user behaviors. Created dynamic user segments and set up personalized, behavior-driven engagement campaigns. Collaborated closely with the design team to revamp the app's UI/UX, incorporating behavioral analytics and user feedback to drive intuitive design improvements.",
    result: "Achieved measurable increase in ROAS through targeted engagement strategies and significantly improved user engagement and retention on the app.",
    skills: ["CleverTap Integration", "Event Tracking", "User Segmentation", "Behavioral Analytics", "UI/UX Design", "Campaign Management"]
  },
  {
    id: "relso",
    company: "Relso",
    role: "UX Strategy Consultant",
    location: "Bengaluru", 
    period: "2024",
    type: "B2B Ecommerce Platform",
    situation: "Relso, a B2B ecommerce platform, needed to improve the digital experience to ensure easier product discovery and boost customer retention.",
    task: "Lead the UX strategy and design the information architecture for Relso's new platform to create a seamless and efficient B2B user experience.",
    action: "Conducted extensive user research and competitor analysis to map user behavior and optimize navigation flows. Designed a new information architecture that improved product discovery and collaborated with designers and developers to implement a modern, intuitive user interface. Recommended data-driven optimizations to continuously enhance engagement and user satisfaction.",
    result: "The revamped platform led to enhanced user engagement, improved product discovery, and higher customer retention, supporting Relso's B2B ecommerce operations.",
    skills: ["User Research", "Information Architecture", "Competitor Analysis", "UX Strategy", "Navigation Design", "Data-driven Optimization"]
  }
];

const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm font-mono text-gray-600 tracking-wider">INDEPENDENT WORK</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none mb-8">
            Freelance
            <br />
            <span className="font-light italic">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            Independent consulting work where I've helped companies optimize their digital products, 
            improve user experiences, and implement data-driven solutions.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {freelanceProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 md:left-8"></div>
                <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-1.5 top-8 md:left-6.5 group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="pl-8 md:pl-20">
                  <div className="bg-white hover:bg-gray-50 p-8 md:p-12 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-gray-100">
                    {/* Project Header */}
                    <div className="mb-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {project.company}
                          </h2>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded-none">
                            {project.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                      </div>
                      
                      <p className="text-xl text-gray-700 font-light mb-2">{project.role}</p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>

                    {/* STAR Format */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-mono tracking-wider">SITUATION</h3>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {project.situation}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-mono tracking-wider">TASK</h3>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {project.task}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-mono tracking-wider">ACTION</h3>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {project.action}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-mono tracking-wider">RESULT</h3>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {project.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Applied</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Need Product
              <br />
              <span className="font-light italic">Consulting?</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              I'm available for freelance product management and UX strategy projects. 
              Let's discuss how I can help optimize your digital products.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-none hover:scale-105 transition-all duration-300 group" 
              asChild
            >
              <a href="mailto:akshatsid36@gmail.com?subject=Freelance Inquiry">
                <span className="mr-2">Start a Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Freelance;
