import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Star } from "lucide-react";

const projectsData = [
  {
    id: "project-1",
    title: "Mobile Banking App Redesign",
    description: "Led product development for a complete mobile banking app redesign focused on improving user experience and adding new functionality.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    skills: ["UX Research", "Product Strategy", "Agile Development"],
    category: "featured"
  },
  {
    id: "project-2",
    title: "Customer Analytics Dashboard",
    description: "Developed a comprehensive analytics dashboard to help business users gain insights from customer data without requiring technical knowledge.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    skills: ["Data Visualization", "User Testing", "Requirement Gathering"],
    category: "analytics"
  },
  {
    id: "project-3",
    title: "E-commerce Shopping Experience",
    description: "Enhanced the shopping experience for an e-commerce platform, focusing on product discovery, recommendations, and checkout optimization.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
    skills: ["A/B Testing", "Conversion Optimization", "User Flows"],
    category: "e-commerce"
  },
  {
    id: "project-4",
    title: "Internal Tools Platform",
    description: "Created a unified platform for internal tools, improving productivity and reducing onboarding time for employees across departments.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000",
    skills: ["Requirements Analysis", "System Integration", "User Interviews"],
    category: "tools"
  },
  {
    id: "project-5",
    title: "Content Management System",
    description: "Redesigned a complex CMS for a media company, focusing on streamlining workflows and improving content creation efficiency.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000",
    skills: ["Workflow Optimization", "Information Architecture", "User Testing"],
    category: "cms"
  },
  {
    id: "project-6",
    title: "Healthcare Patient Portal",
    description: "Developed a patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000",
    skills: ["HIPAA Compliance", "Accessibility", "User Research"],
    category: "healthcare"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-20">
      <div className="mb-16 text-center">
        <span className="inline-block text-accent-blue font-medium mb-3">Portfolio Collection</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
          Product Projects
        </h1>
        <p className="text-lg text-medium-grey max-w-2xl mx-auto">
          A curated collection of product initiatives I've led across various industries, 
          demonstrating my approach to solving complex challenges.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-20">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-light-grey/60 backdrop-blur-sm p-1.5 rounded-xl">
            <TabsTrigger value="all" className="text-sm rounded-lg px-5 py-2.5">All Projects</TabsTrigger>
            <TabsTrigger value="featured" className="text-sm rounded-lg px-5 py-2.5">
              <Star className="mr-1.5 h-4 w-4" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="text-sm rounded-lg px-5 py-2.5">
              <BookOpen className="mr-1.5 h-4 w-4" />
              With Case Studies
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter(project => project.category === 'featured')
              .map((project, index) => (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="case-studies" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter(project => ['project-1', 'project-3'].includes(project.id))
              .map((project, index) => (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div 
        className="glass-card text-center py-12 px-6 mx-auto max-w-4xl animate-fade-in"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 gradient-text">Interested in my approach?</h2>
        <p className="text-lg text-medium-grey mb-8 max-w-2xl mx-auto">
          These projects showcase my product management philosophy. I'm always open to discussing 
          new challenges or providing more detailed insights into my work.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-accent-blue hover:bg-accent-blue/90 shadow-soft hover:shadow-neon transition-all">
            Download Portfolio
          </Button>
          <Button size="lg" variant="outline" asChild className="border-accent-blue/20 hover:bg-accent-blue/5 text-accent-blue">
            <a href="mailto:contact@pmportfolio.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
