
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from 'lucide-react';

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
    <Link to={`/projects/${id}`} className="block h-full group">
      <Card className="overflow-hidden h-full flex flex-col border-transparent hover:border-mono-light transition-all duration-300">
        <div className="overflow-hidden aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-t from-mono-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 right-3 bg-mono-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4 text-mono-black" />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-medium mb-2 group-hover:text-accent-teal transition-colors duration-300">{title}</h3>
          <p className="text-sm text-mono-slate mb-4 line-clamp-2 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="bg-mono-ghost text-mono-slate text-xs font-normal"
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge 
                variant="outline"
                className="bg-mono-ghost text-mono-slate text-xs font-normal"
              >
                +{skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
