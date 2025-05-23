
import { useState } from 'react';

type ExperienceCardProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  image?: string;
};

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  highlights,
  technologies,
  image
}: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        {image && (
          <div className="w-16 h-16 flex-shrink-0">
            <img
              src={image}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-xl font-medium">{title}</h3>
            <span className="text-sm text-medium-grey">{duration}</span>
          </div>
          <h4 className="text-lg font-medium text-dark-grey/80">{company}</h4>
          
          <div className={`mt-3 ${expanded ? '' : 'line-clamp-2'}`}>
            <p>{description}</p>
            
            {expanded && (
              <div className="mt-4 animate-slide-up">
                <h5 className="font-medium mb-2">Key Contributions:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                
                {technologies && technologies.length > 0 && (
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-light-grey text-dark-grey/80 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-medium text-dark-grey underline hover:text-black"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
