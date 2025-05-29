
import { useEffect } from 'react';
import { ArrowRight, Calendar, Award, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const freelanceProjects = [
  {
    id: "motion-education",
    title: "Motion Education",
    type: "B2C Learning App Optimization",
    description: "Led complete CleverTap integration and UI/UX revamp for improved user engagement and ROAS optimization.",
    icon: <Briefcase className="w-6 h-6 text-pro-charcoal" />,
    situation: "At Motion Education, the B2C learning app needed to improve user engagement and boost Return on Ad Spend (ROAS) through better user targeting and personalized interactions.",
    task: "I was tasked with leading the complete integration of CleverTap into the app, setting up event tracking, user segmentation, and launching personalized engagement campaigns to optimize app performance.",
    action: "I led the end-to-end integration of CleverTap, including event instrumentation to accurately capture user behaviors. I created dynamic user segments and set up personalized, behavior-driven engagement campaigns. Additionally, I collaborated closely with the design team to revamp the app's UI/UX, incorporating behavioral analytics and user feedback to drive intuitive design improvements.",
    result: "My efforts resulted in a measurable increase in ROAS through targeted engagement strategies and significantly improved user engagement and retention on the app.",
    skills: ["CleverTap Integration", "Event Tracking", "User Segmentation", "Campaign Management", "UI/UX Design", "Analytics"]
  },
  {
    id: "relso",
    title: "Relso",
    type: "Premium Brand Website Strategy",
    description: "Led UX strategy and information architecture design for premium brand's digital transformation.",
    icon: <Award className="w-6 h-6 text-pro-charcoal" />,
    situation: "At Relso, a premium brand, there was a strong need to improve the digital experience to ensure easier product discovery and boost customer retention.",
    task: "I was responsible for leading the UX strategy and designing the information architecture for Relso's new website to create a seamless and premium user experience.",
    action: "I conducted extensive user research and competitor analysis to map user behavior and optimize navigation flows. I designed a new information architecture that improved product discovery and collaborated with designers and developers to implement a modern, intuitive user interface. I also recommended data-driven optimizations to continuously enhance engagement and user satisfaction.",
    result: "The revamped website led to enhanced user engagement, improved product discovery, and higher customer retention, supporting Relso's premium brand positioning.",
    skills: ["UX Strategy", "Information Architecture", "User Research", "Competitor Analysis", "Product Discovery", "Data Analytics"]
  }
];

const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pro-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pro-charcoal tracking-tight">
            Independent Projects
          </h1>
          <p className="text-lg text-pro-gray max-w-2xl mx-auto leading-relaxed">
            Selected freelance engagements where I've driven product strategy, 
            user experience optimization, and digital transformation initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 mb-20">
          {freelanceProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-pro-white border border-pro-light-silver rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-pro-off-white p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-pro-charcoal mb-2">
                      {project.title}
                    </h2>
                    <p className="text-pro-gray font-medium mb-2">{project.type}</p>
                    <p className="text-pro-gray leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* STAR Format */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-pro-charcoal mb-2 uppercase tracking-wide">
                      Situation
                    </h4>
                    <p className="text-pro-gray leading-relaxed">{project.situation}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-pro-charcoal mb-2 uppercase tracking-wide">
                      Task
                    </h4>
                    <p className="text-pro-gray leading-relaxed">{project.task}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-pro-charcoal mb-2 uppercase tracking-wide">
                      Action
                    </h4>
                    <p className="text-pro-gray leading-relaxed">{project.action}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-pro-charcoal mb-2 uppercase tracking-wide">
                      Result
                    </h4>
                    <p className="text-pro-gray leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-8 pt-6 border-t border-pro-light-silver">
                  <h4 className="text-sm font-semibold text-pro-charcoal mb-3 uppercase tracking-wide">
                    Key Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-pro-off-white text-pro-gray text-sm font-medium rounded-md border border-pro-light-silver"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-pro-off-white rounded-lg p-8 md:p-10 border border-pro-light-silver text-center animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4 text-pro-charcoal">
            Looking for Product Expertise?
          </h2>
          <p className="text-pro-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm available for strategic product consulting, user experience optimization, 
            and digital transformation projects. Let's discuss how I can help drive your product goals.
          </p>
          <Button size="lg" className="bg-pro-charcoal hover:bg-pro-black text-pro-white font-medium px-8 py-3" asChild>
            <a href="mailto:akshatsid36@gmail.com?subject=Product Consulting Inquiry">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
