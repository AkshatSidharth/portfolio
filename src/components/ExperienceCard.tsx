
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ExperienceCardProps = {
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  image?: string;
};

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  description,
  highlights,
  technologies,
  image
}: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-teal/10 border border-accent-teal/20">
        <div className="w-3 h-3 rounded-full bg-accent-teal"></div>
      </div>
      
      <div className="bg-mono-white rounded-lg p-6 border border-mono-light shadow-sm hover:shadow-md transition-all">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            {image && (
              <img
                src={image}
                alt={`${company} logo`}
                className="w-10 h-10 rounded-full object-cover border border-mono-light"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-medium">{title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-medium text-mono-slate">{company}</span>
                {location && (
                  <span className="hidden sm:inline text-mono-gray">•</span>
                )}
                {location && <span className="text-sm text-mono-gray">{location}</span>}
              </div>
            </div>
            <span className="text-sm px-3 py-1 bg-mono-ghost rounded-full text-mono-gray whitespace-nowrap">{duration}</span>
          </div>
          
          <div className={expanded ? '' : 'line-clamp-2'}>
            <p className="text-sm text-mono-slate">{description}</p>
            
            {expanded && (
              <div className="mt-6 space-y-6 animate-fade-in">
                <div>
                  <h5 className="font-medium text-sm mb-3 text-mono-black">Key Achievements</h5>
                  <ul className="space-y-3 bg-mono-ghost p-4 rounded-lg">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-accent-teal mt-1 flex-shrink-0">•</span>
                        <span className="text-mono-slate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {technologies && technologies.length > 0 && (
                  <div>
                    <h5 className="font-medium text-sm mb-3 text-mono-black">Tools & Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-mono-ghost text-mono-slate text-xs rounded-md hover:bg-mono-light transition-colors"
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
            className="flex items-center gap-1 text-sm font-medium text-accent-teal hover:text-accent-teal/80 transition-colors mt-2"
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
