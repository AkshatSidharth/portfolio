
import { useEffect } from 'react';
import { ArrowRight, Calendar, Award, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const freelanceData = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom website development with responsive design and modern frameworks like React.",
    icon: <Briefcase className="w-6 h-6 text-accent-teal" />,
    projects: 15,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    id: "product-consulting",
    title: "Product Consulting",
    description: "Strategic product guidance to startups and organizations to optimize their digital offerings.",
    icon: <Award className="w-6 h-6 text-accent-teal" />,
    projects: 8,
    skills: ["Product Strategy", "UX Research", "Market Analysis", "Roadmapping"]
  },
  {
    id: "analytics-implementation",
    title: "Analytics Implementation",
    description: "Setting up comprehensive analytics solutions to track user behavior and business metrics.",
    icon: <Calendar className="w-6 h-6 text-accent-teal" />,
    projects: 12,
    skills: ["Google Analytics", "Tag Manager", "Data Visualization", "Custom Dashboards"]
  }
];

const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-gradient">Freelance Services</h1>
          <p className="text-lg text-mono-slate max-w-2xl mx-auto">
            I provide specialized product and development services to help businesses 
            achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {freelanceData.map((service, index) => (
            <div 
              key={service.id}
              className="bg-mono-white p-8 rounded-lg border border-mono-light shadow-sm hover:shadow-md transition-shadow animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-mono-slate mb-4">{service.description}</p>
              <div className="mb-4">
                <span className="text-sm text-mono-gray">{service.projects} projects completed</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-mono-ghost text-xs rounded-md text-mono-slate">
                    {skill}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="group" asChild>
                <a href="mailto:akshatsid36@gmail.com?subject=Freelance Inquiry: {service.title}">
                  Inquire
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-mono-ghost rounded-lg p-8 border border-mono-light text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4">Have a custom project in mind?</h2>
          <p className="text-mono-slate mb-6 max-w-lg mx-auto">
            Let's discuss how I can help you achieve your specific business goals with tailored solutions.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:akshatsid36@gmail.com?subject=Custom Project Inquiry">
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
