
import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Building, Target, Wrench } from 'lucide-react';

type ExperienceCardProps = {
  title: string;
  company: string;
  location?: string;
  duration: string;
  icon: string;
  briefSummary: string;
  achievements: string[];
  toolsUsed: Record<string, string[]>;
};

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  icon,
  briefSummary,
  achievements,
  toolsUsed
}: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/20 border-2 border-accent-blue/40 shadow-lg">
        <div className="w-4 h-4 rounded-full bg-accent-blue"></div>
      </div>
      
      <div className="bg-pro-white rounded-xl p-8 border border-pro-light-silver shadow-lg hover:shadow-xl transition-all duration-300 hover:border-pro-silver">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">{icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-pro-charcoal">{company}</span>
              </div>
              <h3 className="text-xl font-semibold text-pro-dark-gray mb-3">{title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                {location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pro-gray" />
                    <span className="text-pro-gray font-medium">{location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pro-gray" />
                  <span className="text-sm px-4 py-2 bg-pro-off-white rounded-lg text-pro-gray font-medium border border-pro-light-silver">{duration}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-lg mb-4 text-pro-charcoal flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                Brief Summary
              </h5>
              <div className="bg-pro-off-white p-6 rounded-lg border border-pro-light-silver">
                <p className="text-pro-gray leading-relaxed">{briefSummary}</p>
              </div>
            </div>
            
            {expanded && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h5 className="font-semibold text-lg mb-4 text-pro-charcoal flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent-blue" />
                    Key Achievements
                  </h5>
                  <div className="bg-pro-off-white p-6 rounded-lg border border-pro-light-silver">
                    <ul className="space-y-6">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-green-600 mt-1 flex-shrink-0 text-lg">✅</span>
                          <span className="text-pro-gray leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-lg mb-4 text-pro-charcoal flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent-blue" />
                    Tools Used
                  </h5>
                  <div className="space-y-4">
                    {Object.entries(toolsUsed).map(([category, tools], index) => (
                      <div key={index} className="bg-pro-off-white p-4 rounded-lg border border-pro-light-silver">
                        <h6 className="font-semibold text-pro-dark-gray mb-3">{category}:</h6>
                        <div className="flex flex-wrap gap-2">
                          {tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex}
                              className="px-3 py-1.5 bg-pro-white text-pro-gray text-sm font-medium rounded-md hover:bg-pro-light-silver transition-colors border border-pro-silver"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-accent-blue hover:text-accent-blue-light transition-colors mt-4 font-semibold text-lg group"
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
