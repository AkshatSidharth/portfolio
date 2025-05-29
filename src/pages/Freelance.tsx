
import { useEffect } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const freelanceProjects = [
  {
    id: "motion-education",
    company: "Motion Education",
    role: "Product Consultant",
    location: "Remote",
    period: "2024",
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
    location: "Remote", 
    period: "2024",
    type: "Premium Brand Website",
    situation: "Relso, a premium brand, needed to improve the digital experience to ensure easier product discovery and boost customer retention.",
    task: "Lead the UX strategy and design the information architecture for Relso's new website to create a seamless and premium user experience.",
    action: "Conducted extensive user research and competitor analysis to map user behavior and optimize navigation flows. Designed a new information architecture that improved product discovery and collaborated with designers and developers to implement a modern, intuitive user interface. Recommended data-driven optimizations to continuously enhance engagement and user satisfaction.",
    result: "The revamped website led to enhanced user engagement, improved product discovery, and higher customer retention, supporting Relso's premium brand positioning.",
    skills: ["User Research", "Information Architecture", "Competitor Analysis", "UX Strategy", "Navigation Design", "Data-driven Optimization"]
  }
];

const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Freelance Projects
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            Independent consulting work where I've helped companies optimize their digital products, 
            improve user experiences, and implement data-driven solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {freelanceProjects.map((project, index) => (
            <div key={project.id} className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-2 top-0"></div>
              
              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-medium text-gray-900">
                    {project.company}
                  </h2>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                    {project.type}
                  </span>
                </div>
                <p className="text-xl text-gray-700 font-light mb-2">{project.role}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>
              </div>

              {/* STAR Format */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Situation</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {project.situation}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Task</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {project.task}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Action</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {project.action}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Result</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Skills Applied</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Need Product Consulting?
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            I'm available for freelance product management and UX strategy projects. 
            Let's discuss how I can help optimize your digital products.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white font-normal px-8 py-4 rounded-md" 
            asChild
          >
            <a href="mailto:akshatsid36@gmail.com?subject=Freelance Inquiry">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
