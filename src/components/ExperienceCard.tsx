
import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Building } from 'lucide-react';

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
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent-bronze/20 border-2 border-accent-bronze/40 shadow-lg">
        <div className="w-4 h-4 rounded-full bg-accent-bronze"></div>
      </div>
      
      <div className="bg-warm-ivory rounded-xl p-8 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300 hover:border-warm-sand">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4 mb-4">
            {image && (
              <img
                src={image}
                alt={`${company} logo`}
                className="w-16 h-16 rounded-xl object-cover border-2 border-warm-beige shadow-md"
              />
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-warm-espresso mb-2">{title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-accent-bronze" />
                  <span className="font-semibold text-warm-brown text-lg">{company}</span>
                </div>
                {location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-warm-chocolate" />
                    <span className="text-warm-chocolate">{location}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-warm-chocolate" />
                <span className="text-sm px-4 py-2 bg-warm-cream rounded-lg text-warm-chocolate font-medium border border-warm-sand">{duration}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-warm-chocolate leading-relaxed text-lg">{description}</p>
            </div>
            
            {expanded && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h5 className="font-semibold text-lg mb-4 text-warm-espresso flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-bronze rounded-full"></span>
                    Key Achievements & Impact
                  </h5>
                  <div className="bg-warm-cream p-6 rounded-lg border border-warm-sand">
                    <ul className="space-y-4">
                      {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-accent-bronze mt-2 flex-shrink-0 text-lg">▸</span>
                          <span className="text-warm-chocolate leading-relaxed font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {technologies && technologies.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-lg mb-4 text-warm-espresso flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-bronze rounded-full"></span>
                      Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2.5 bg-warm-cream text-warm-chocolate font-medium text-sm rounded-lg hover:bg-warm-beige transition-colors border border-warm-sand shadow-sm"
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
            className="flex items-center gap-2 text-accent-bronze hover:text-accent-copper transition-colors mt-4 font-semibold text-lg group"
          >
            {expanded ? (
              <>
                <span>Show Less Details</span>
                <ChevronUp size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                <span>View Full Details</span>
                <ChevronDown size={20} className="group-hover:transform group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
