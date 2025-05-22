
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
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-glass border border-transparent hover:border-white/20 transition-all duration-300">
          <div className="overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-dark-grey text-xs font-medium px-3 py-1">
                View Project
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6 flex flex-col flex-grow bg-white/95 backdrop-blur-lg border-t border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent-blue transition-colors duration-300">{title}</h3>
            <p className="text-muted-foreground mb-5 flex-grow line-clamp-3">{description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-light-grey/50 text-medium-grey text-xs font-normal hover:bg-accent-blue/10 hover:text-accent-blue transition-colors"
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
