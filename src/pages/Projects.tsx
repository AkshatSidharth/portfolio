
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: "project-1",
    title: "Mobile Banking App Redesign",
    description: "Led product development for a complete mobile banking app redesign focused on improving user experience and adding new functionality.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Banking+App",
    skills: ["UX Research", "Product Strategy", "Agile Development"]
  },
  {
    id: "project-2",
    title: "Customer Analytics Dashboard",
    description: "Developed a comprehensive analytics dashboard to help business users gain insights from customer data without requiring technical knowledge.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Analytics+Dashboard",
    skills: ["Data Visualization", "User Testing", "Requirement Gathering"]
  },
  {
    id: "project-3",
    title: "E-commerce Shopping Experience",
    description: "Enhanced the shopping experience for an e-commerce platform, focusing on product discovery, recommendations, and checkout optimization.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=E-commerce",
    skills: ["A/B Testing", "Conversion Optimization", "User Flows"]
  },
  {
    id: "project-4",
    title: "Internal Tools Platform",
    description: "Created a unified platform for internal tools, improving productivity and reducing onboarding time for employees across departments.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Internal+Tools",
    skills: ["Requirements Analysis", "System Integration", "User Interviews"]
  },
  {
    id: "project-5",
    title: "Content Management System",
    description: "Redesigned a complex CMS for a media company, focusing on streamlining workflows and improving content creation efficiency.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=CMS",
    skills: ["Workflow Optimization", "Information Architecture", "User Testing"]
  },
  {
    id: "project-6",
    title: "Healthcare Patient Portal",
    description: "Developed a patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Healthcare+Portal",
    skills: ["HIPAA Compliance", "Accessibility", "User Research"]
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
          A selection of product initiatives I've led across various industries and companies.
        </p>
      </div>

      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Want to see more?</h2>
        <p className="text-lg text-dark-grey/80 mb-6 max-w-2xl mx-auto">
          These projects represent a selection of my work. For more detailed information or 
          to discuss specific types of projects, please get in touch.
        </p>
        <a href="mailto:contact@pmportfolio.com" className="btn-primary inline-block">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Projects;
