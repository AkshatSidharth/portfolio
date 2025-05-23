
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
    <div className="minimal-card animate-fade-in group hover-lift">
      <div className="flex flex-col md:flex-row gap-5 md:items-start">
        {image && (
          <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden bg-light-grey/20 border border-light-grey/30">
            <img
              src={image}
              alt={`${company} logo`}
              className="w-full h-full object-contain grayscale"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-2">
              <div className="w-6 h-0.5 bg-dark-grey mb-2 transition-all duration-300 group-hover:w-10"></div>
              <h3 className="text-lg font-medium text-off-black">{title}</h3>
            </div>
            <span className="text-xs text-medium-grey bg-light-grey/30 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">{duration}</span>
          </div>
          <h4 className="text-base font-medium text-medium-grey mb-3">{company}</h4>
          
          <div className={`mt-3 ${expanded ? '' : 'line-clamp-2'} text-sm text-dark-grey/80`}>
            <p>{description}</p>
            
            {expanded && (
              <div className="mt-5 animate-slide-up">
                <h5 className="font-medium mb-2 text-dark-grey text-sm">Key Contributions:</h5>
                <ul className="space-y-2 text-sm">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-dark-grey mt-1.5 mr-2"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {technologies && technologies.length > 0 && (
                  <div className="mt-5">
                    <h5 className="font-medium mb-2 text-dark-grey text-sm">Technologies:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-light-grey/30 text-medium-grey text-xs rounded-full"
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
            className="mt-3 text-xs font-medium text-dark-grey hover:text-off-black transition-colors flex items-center"
          >
            {expanded ? 'Show Less' : 'Show More'}
            <span className={`ml-1 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
