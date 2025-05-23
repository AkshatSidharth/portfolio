
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
    <Link to={`/case-studies/${id}`} className="block h-full group">
      <div className="minimal-card h-full flex flex-col hover-lift">
        <div className="overflow-hidden rounded-md mb-4 aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
        </div>
        
        <div className="flex-grow">
          <div className="mb-3">
            <div className="w-6 h-0.5 bg-dark-grey mb-2 transition-all duration-300 group-hover:w-10"></div>
            <h3 className="text-lg font-medium mb-1">{title}</h3>
          </div>
          <p className="text-xs text-medium-grey mb-3">{company}</p>
          <p className="line-clamp-3 text-sm text-dark-grey/80 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-light-grey/40 text-medium-grey text-xs rounded-full"
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
