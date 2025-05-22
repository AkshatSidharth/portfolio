
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
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-5 md:items-center">
        {image && (
          <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-light-grey">
            <img
              src={image}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-xl font-medium gradient-text">{title}</h3>
            <span className="text-sm text-medium-grey bg-light-grey/50 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">{duration}</span>
          </div>
          <h4 className="text-lg font-medium text-dark-grey/80 mb-3">{company}</h4>
          
          <div className={`mt-3 ${expanded ? '' : 'line-clamp-2'}`}>
            <p>{description}</p>
            
            {expanded && (
              <div className="mt-6 animate-slide-up">
                <h5 className="font-medium mb-3 text-accent-blue">Key Contributions:</h5>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent-blue mt-2 mr-3"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {technologies && technologies.length > 0 && (
                  <div className="mt-6">
                    <h5 className="font-medium mb-3 text-accent-blue">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-light-grey/70 text-medium-grey text-xs rounded-full"
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
            className="mt-4 text-sm font-medium text-accent-blue hover:text-accent-purple transition-colors"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
