
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
    <div className="opacity-100 transition-all duration-500 h-full group">
      <Link to={`/projects/${id}`} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border-transparent hover:border-light-grey">
          <div className="overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
            />
          </div>
          
          <CardContent className="p-6 flex flex-col flex-grow bg-background/90 backdrop-blur-sm">
            <h3 className="text-xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-muted-foreground mb-5 flex-grow line-clamp-3">{description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-background text-foreground/80 text-xs font-normal hover:bg-accent/50 transition-colors"
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
