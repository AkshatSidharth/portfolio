
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
    <div className="border-l-2 border-mono-light pl-6 py-2 relative animate-fade-in">
      <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-accent-teal"></div>
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-sm text-mono-gray md:text-right">{duration}</span>
        </div>
        
        <div className="flex items-center gap-2">
          {image && (
            <img
              src={image}
              alt={`${company} logo`}
              className="w-6 h-6 object-contain"
            />
          )}
          <div>
            <h4 className="font-medium text-mono-slate">{company}</h4>
            {location && <p className="text-sm text-mono-gray">{location}</p>}
          </div>
        </div>
        
        <div className={expanded ? '' : 'line-clamp-2'}>
          <p className="text-sm text-mono-slate">{description}</p>
          
          {expanded && (
            <div className="mt-4 space-y-4 animate-slide-up">
              <div>
                <h5 className="font-medium text-sm mb-2 text-mono-black">Key Achievements</h5>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-accent-teal mt-1">•</span>
                      <span className="text-mono-slate">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {technologies && technologies.length > 0 && (
                <div>
                  <h5 className="font-medium text-sm mb-2 text-mono-black">Tools & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-mono-ghost text-mono-slate text-xs rounded-md"
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
          className="flex items-center gap-1 text-sm font-medium text-accent-teal mt-2 hover:underline"
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
  );
};

export default ExperienceCard;
