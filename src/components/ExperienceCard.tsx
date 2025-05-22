
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
    <div className="minimal-card animate-fade-in">
      <div className="flex flex-col md:flex-row gap-5 md:items-start">
        {image && (
          <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden bg-light-grey/50">
            <img
              src={image}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-lg font-medium text-dark-grey">{title}</h3>
            <span className="text-xs text-medium-grey bg-light-grey/40 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">{duration}</span>
          </div>
          <h4 className="text-base font-medium text-medium-grey mb-3">{company}</h4>
          
          <div className={`mt-3 ${expanded ? '' : 'line-clamp-2'} text-sm text-dark-grey/80`}>
            <p>{description}</p>
            
            {expanded && (
              <div className="mt-5 animate-slide-up">
                <h5 className="font-medium mb-2 text-accent-blue text-sm">Key Contributions:</h5>
                <ul className="space-y-1.5 text-sm">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 mr-2"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {technologies && technologies.length > 0 && (
                  <div className="mt-5">
                    <h5 className="font-medium mb-2 text-accent-blue text-sm">Technologies:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-light-grey/40 text-medium-grey text-xs rounded-full"
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
            className="mt-3 text-xs font-medium text-accent-blue hover:text-accent-purple transition-colors"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
