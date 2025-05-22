
import { useState } from 'react';

const freelanceProjects = [
  {
    id: "freelance-1",
    title: "E-commerce UX Overhaul",
    client: "Boutique Fashion",
    period: "Mar 2022 - Jul 2022",
    description: "Led the redesign of a fashion e-commerce website to improve user experience, focusing on streamlining the purchase funnel and enhancing mobile usability.",
    challenge: "The client's website had a high cart abandonment rate (78%) and poor mobile conversion. Users were getting frustrated with the checkout process.",
    solution: "Conducted user research to identify pain points, created wireframes and prototypes for a simplified checkout flow, and worked with developers to implement a responsive design.",
    results: [
      "Reduced cart abandonment rate by 35%",
      "Improved mobile conversion by 42%",
      "Increased average order value by 17%"
    ],
    technologies: ["Figma", "Hotjar", "Google Analytics", "UserTesting"],
    testimonial: {
      text: "Their product expertise transformed our online store. The redesigned checkout experience resulted in an immediate revenue boost.",
      author: "Sarah Chen, Marketing Director"
    },
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Boutique+Project"
  },
  {
    id: "freelance-2",
    title: "SaaS Product Strategy",
    client: "TechFlow Solutions",
    period: "Sep 2021 - Feb 2022",
    description: "Developed product strategy for a B2B SaaS startup, helping them prioritize features for their MVP and create a roadmap for the first year of product development.",
    challenge: "The early-stage startup had limited resources and needed to focus on building the right features to attract their first enterprise customers.",
    solution: "Conducted market analysis and customer interviews to identify key pain points, led workshops to define the MVP, and created a prioritized roadmap with clear success metrics.",
    results: [
      "Successfully launched MVP within 4 months",
      "Acquired 5 enterprise clients within first quarter post-launch",
      "Secured additional seed funding based on early traction"
    ],
    technologies: ["Miro", "Asana", "Intercom", "Mixpanel"],
    testimonial: {
      text: "Their strategic guidance was instrumental in helping us focus on the right features. Their product expertise saved us months of development time.",
      author: "Michael Roberts, CEO"
    },
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=SaaS+Project"
  }
];

const Freelance = () => {
  const [activeProject, setActiveProject] = useState(freelanceProjects[0]);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Freelance Projects</h1>
        <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
          Independent consulting work where I've helped businesses solve specific product challenges.
        </p>
      </div>

      {/* Project Selector (Tabs) */}
      <div className="border-b border-light-grey mb-8">
        <div className="flex overflow-x-auto space-x-8">
          {freelanceProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`py-4 font-medium text-lg border-b-2 transition-colors whitespace-nowrap ${
                activeProject.id === project.id
                  ? 'border-dark-grey text-dark-grey'
                  : 'border-transparent text-medium-grey hover:text-dark-grey'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Project Display */}
      <div className="animate-fade-in">
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={activeProject.image} 
            alt={activeProject.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Client</h3>
            <p>{activeProject.client}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Timeline</h3>
            <p>{activeProject.period}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-light-grey text-dark-grey/70 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">{activeProject.title}</h2>
        <p className="text-lg mb-8">{activeProject.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="text-xl font-medium mb-4">The Challenge</h3>
            <p>{activeProject.challenge}</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-medium mb-4">The Solution</h3>
            <p>{activeProject.solution}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Key Results</h3>
          <ul className="space-y-2">
            {activeProject.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-3 text-dark-grey flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="bg-light-grey p-8 rounded-lg">
          <blockquote>
            <p className="text-lg italic mb-4">"{activeProject.testimonial.text}"</p>
            <footer className="font-medium">— {activeProject.testimonial.author}</footer>
          </blockquote>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
        <p className="text-lg text-dark-grey/80 mb-6 max-w-2xl mx-auto">
          I'm currently available for freelance projects and consulting work.
        </p>
        <a href="mailto:contact@pmportfolio.com" className="btn-primary inline-block">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Freelance;
