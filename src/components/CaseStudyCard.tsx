
import { Link } from 'react-router-dom';

type CaseStudyCardProps = {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  tags: string[];
};

const CaseStudyCard = ({
  id,
  title,
  company,
  description,
  image,
  tags
}: CaseStudyCardProps) => {
  return (
    <Link to={`/case-studies/${id}`} className="block">
      <div className="card h-full flex flex-col transition-all hover:-translate-y-1 duration-300">
        <div className="overflow-hidden rounded-md mb-4 aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-medium-grey mb-3">{company}</p>
          <p className="line-clamp-3 text-dark-grey/80 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-light-grey text-dark-grey/70 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
