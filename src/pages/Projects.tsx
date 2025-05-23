
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Star, LineChart, ShoppingBag, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: "project-1",
    title: "Customer Data & Engagement Platform",
    description: "A unified platform for sports organizations to collect, analyze and activate customer data across touchpoints.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
    skills: ["Customer Data Platforms", "Engagement Automation", "Analytics Dashboard", "Sports Tech"],
    category: "featured"
  },
  {
    id: "project-2",
    title: "Predictive Analytics for Sports",
    description: "Machine learning models to predict athlete performance metrics and provide actionable insights for training optimization.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000",
    skills: ["ML/AI", "Sports Analytics", "Performance Optimization", "Data Visualization"],
    category: "analytics"
  },
  {
    id: "project-3",
    title: "Sports Merchandise E-commerce",
    description: "Data-driven e-commerce strategy with personalized recommendations and engagement campaigns for sports merchandise.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000",
    skills: ["E-commerce", "Personalization", "Customer Engagement", "Conversion Optimization"],
    category: "e-commerce"
  },
  {
    id: "project-4",
    title: "ML Learning Recommendations",
    description: "Recommendation engine for learning content based on user behavior, progress, and career goals to enhance engagement.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000",
    skills: ["Machine Learning", "Personalization", "EdTech", "User Retention"],
    category: "analytics"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div 
        className="mb-12 text-center animate-fade-in"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Product Projects
        </h1>
        <p className="text-lg text-mono-slate max-w-2xl mx-auto">
          A selection of product initiatives I've led across various industries,
          demonstrating my approach to solving complex challenges.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-16">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-mono-ghost">
            <TabsTrigger value="all" className="text-sm">All Projects</TabsTrigger>
            <TabsTrigger value="featured" className="text-sm flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-sm flex items-center gap-1">
              <LineChart className="h-3.5 w-3.5" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="e-commerce" className="text-sm flex items-center gap-1">
              <ShoppingBag className="h-3.5 w-3.5" />
              E-commerce
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === 'featured')
              .map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === 'analytics')
              .map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="e-commerce" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === 'e-commerce')
              .map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div 
        className="text-center py-12 bg-mono-ghost rounded-xl px-6 border border-mono-light animate-fade-in"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's Discuss Your Project</h2>
        <p className="text-mono-slate mb-8 max-w-2xl mx-auto">
          I'm passionate about building products that solve real problems and create measurable impact.
          If you're looking for a product manager with expertise in data platforms and analytics, let's connect.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <a href="/files/resume.pdf" download>Download Portfolio</a>
          </Button>
          <Button variant="outline" asChild className="group">
            <a href="mailto:akshatsid36@gmail.com">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
