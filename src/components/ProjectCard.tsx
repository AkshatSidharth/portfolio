
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="h-full animate-fade-in group">
      <Link to={`/projects/${id}`} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col hover-lift border-light-grey/30 group-hover:border-dark-grey/30">
          <div className="overflow-hidden relative aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-off-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-dark-grey text-xs font-medium">
                View Project
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-5 flex flex-col flex-grow">
            <div className="mb-3">
              <div className="w-8 h-0.5 bg-dark-grey mb-2 transition-all duration-300 group-hover:w-12"></div>
              <h3 className="text-lg font-medium mb-2 text-off-black">{title}</h3>
            </div>
            <p className="text-sm text-medium-grey mb-4 flex-grow line-clamp-3">{description}</p>
            
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-light-grey/10 text-medium-grey text-xs font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;
