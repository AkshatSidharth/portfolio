
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          
          <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-medium mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-5 flex-grow">{description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-background text-foreground/80 text-xs font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
