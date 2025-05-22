
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
    <div className="h-full animate-fade-in">
      <Link to={`/projects/${id}`} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-glass border border-light-grey/30 hover:border-accent-blue/20 transition-all duration-300">
          <div className="overflow-hidden relative aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-dark-grey text-xs font-medium">
                View Details
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-medium mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-medium-grey mb-4 flex-grow line-clamp-3">{description}</p>
            
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-secondary/50 text-medium-grey text-xs font-normal"
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
