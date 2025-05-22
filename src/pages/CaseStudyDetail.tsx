
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';

const caseStudiesData = [
  {
    id: "case-1",
    title: "Redesigning the Customer Onboarding Flow",
    company: "Tech Innovations Inc.",
    period: "Q3-Q4 2022",
    overview: "A comprehensive case study on how we improved customer activation rates by redesigning the onboarding experience for new users.",
    challenge: "Our SaaS platform was experiencing a high drop-off rate during the initial onboarding, with only 35% of users completing the setup process. This was leading to poor activation metrics and high early-stage churn.",
    approach: [
      "Conducted user interviews with both successful customers and those who abandoned the product",
      "Analyzed onboarding funnel data to identify specific drop-off points",
      "Created user journey maps to understand the emotional experience during onboarding",
      "Developed and tested multiple prototype solutions with target users",
      "Worked with engineering to implement an improved, streamlined onboarding process"
    ],
    solution: "We redesigned the onboarding flow to reduce complexity, providing a step-by-step guided experience with progress indicators. We implemented contextual help, reduced the number of required fields, and added the ability to skip steps and return later. The new design also incorporated personalized recommendations based on the user's role and objectives.",
    results: [
      "Increased onboarding completion rate from 35% to 72%",
      "Reduced average onboarding time from 24 minutes to 11 minutes",
      "Improved 30-day retention by 28%",
      "Positive user feedback score of 4.6/5 for the new onboarding process"
    ],
    learnings: "This project reinforced the importance of understanding the user's context and goals before asking them to take actions. We learned that reducing friction is often more valuable than adding features, and that allowing users flexibility in how they complete tasks leads to higher completion rates.",
    image: "https://placehold.co/1200x675/e5e5e5/cccccc?text=Case+Study+1",
    tags: ["User Onboarding", "UX Research", "A/B Testing"]
  },
  // Additional case studies would be defined here
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudiesData.find(cs => cs.id === id);
  
  if (!caseStudy) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't exist.</p>
        <Link to="/case-studies" className="btn-primary">
          Back to Case Studies
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link to="/case-studies" className="inline-flex items-center text-dark-grey hover:underline mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Case Studies
      </Link>
      
      <h1 className="text-4xl font-bold mb-3">{caseStudy.title}</h1>
      <p className="text-xl text-medium-grey mb-8">{caseStudy.company} • {caseStudy.period}</p>
      
      <div className="mb-10 rounded-lg overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title}
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
        <p>{caseStudy.overview}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge</h2>
        <p>{caseStudy.challenge}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Approach</h2>
        <ul className="space-y-2 list-disc pl-5">
          {caseStudy.approach.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Solution</h2>
        <p>{caseStudy.solution}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Results</h2>
        <ul className="space-y-2 list-disc pl-5">
          {caseStudy.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Learnings</h2>
        <p>{caseStudy.learnings}</p>
        
        <div className="mt-12 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-light-grey text-dark-grey/80 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-16 border-t border-light-grey pt-8">
        <h3 className="text-xl font-semibold mb-4">Interested in learning more about this project?</h3>
        <p className="mb-6">
          I'd be happy to discuss the details of this case study and share additional insights.
        </p>
        <Button href="mailto:contact@pmportfolio.com">Get in Touch</Button>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
