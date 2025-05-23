
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
    <Link to={`/case-studies/${id}`} className="block group">
      <div className="card h-full flex flex-col border border-mono-ghost hover:border-mono-light transition-all duration-300">
        <div className="overflow-hidden rounded-md mb-4">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-grow px-1">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-xs uppercase tracking-wider text-mono-gray font-medium">{company}</p>
          </div>
          
          <h3 className="text-lg font-medium mb-2 group-hover:text-accent-teal transition-colors duration-300">{title}</h3>
          <p className="text-sm text-mono-slate mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-mono-ghost text-mono-slate text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-mono-ghost text-mono-slate text-xs rounded-md">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
