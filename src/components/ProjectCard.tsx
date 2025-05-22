
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
};

const ProjectCard = ({
  id,
  title,
  description,
  image,
  skills
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="block">
      <div className="card h-full flex flex-col">
        <div className="overflow-hidden rounded-md mb-4 aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-dark-grey/80 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-light-grey text-dark-grey/70 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
