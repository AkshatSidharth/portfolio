
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';

const projectsData = [
  {
    id: "project-1",
    title: "Mobile Banking App Redesign",
    company: "Tech Innovations Inc.",
    period: "2022",
    description: "Led product development for a complete mobile banking app redesign focused on improving user experience and adding new functionality.",
    challenge: "The existing banking app had low user satisfaction scores (NPS of 15) and was losing customers to competitors with more modern mobile experiences. The app was also struggling with technical debt that made adding new features difficult.",
    responsibilities: [
      "Conducted competitor analysis and user research to identify improvement opportunities",
      "Developed product requirements and worked with design to create wireframes and prototypes",
      "Prioritized features for an MVP release and subsequent iterations",
      "Managed cross-functional team of designers, engineers, and QA specialists",
      "Coordinated with stakeholders including compliance, security, and marketing teams"
    ],
    outcomes: [
      "Successfully launched redesigned app with 98.5% stability rate",
      "Improved NPS from 15 to 42 within three months of launch",
      "Increased mobile banking usage by 37% among existing customers",
      "Reduced customer support calls related to app functionality by 28%"
    ],
    image: "https://placehold.co/1200x675/e5e5e5/cccccc?text=Banking+App",
    skills: ["UX Research", "Product Strategy", "Agile Development", "Cross-functional Leadership"]
  },
  // Additional projects would be defined here
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link to="/projects" className="inline-flex items-center text-dark-grey hover:underline mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>
      
      <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
      <p className="text-xl text-medium-grey mb-8">{project.company} • {project.period}</p>
      
      <div className="mb-10 rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Project Overview</h2>
        <p>{project.description}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge</h2>
        <p>{project.challenge}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">My Role & Responsibilities</h2>
        <ul className="space-y-2 list-disc pl-5">
          {project.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Outcomes</h2>
        <ul className="space-y-2 list-disc pl-5">
          {project.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
        
        <div className="mt-12 flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-light-grey text-dark-grey/80 text-sm rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-16 border-t border-light-grey pt-8">
        <h3 className="text-xl font-semibold mb-4">Want to know more about this project?</h3>
        <p className="mb-6">
          I'd be happy to discuss the details of this project and share more about my approach.
        </p>
        <Button href="mailto:contact@pmportfolio.com">Contact Me</Button>
      </div>
    </div>
  );
};

export default ProjectDetail;
