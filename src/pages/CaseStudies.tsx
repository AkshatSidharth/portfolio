
import CaseStudyCard from '../components/CaseStudyCard';

const caseStudiesData = [
  {
    id: "case-1",
    title: "Redesigning the Customer Onboarding Flow",
    company: "Tech Innovations Inc.",
    description: "A comprehensive case study on how we improved customer activation rates by redesigning the onboarding experience for new users.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Case+Study+1",
    tags: ["User Onboarding", "UX Research", "A/B Testing"]
  },
  {
    id: "case-2",
    title: "Building a Feature Prioritization Framework",
    company: "Digital Solutions Co.",
    description: "How we developed an objective framework for prioritizing product features that balanced user needs with business goals.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Case+Study+2",
    tags: ["Product Strategy", "Decision Framework", "Stakeholder Management"]
  },
  {
    id: "case-3",
    title: "Mobile App Performance Optimization",
    company: "StartUp Ventures",
    description: "A detailed look at how we improved app performance and reduced crash rates through systematic analysis and targeted improvements.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Case+Study+3",
    tags: ["Performance Optimization", "Analytics", "Technical PM"]
  },
  {
    id: "case-4",
    title: "Enterprise Dashboard Redesign",
    company: "Tech Innovations Inc.",
    description: "How we transformed a complex data dashboard to improve usability for enterprise customers while adding new functionality.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Case+Study+4",
    tags: ["Data Visualization", "Enterprise UX", "User Testing"]
  },
  {
    id: "case-5",
    title: "Implementing an Agile Product Development Process",
    company: "Digital Solutions Co.",
    description: "A case study on transitioning from waterfall to agile product development, focusing on process changes and results.",
    image: "https://placehold.co/800x450/e5e5e5/cccccc?text=Case+Study+5",
    tags: ["Agile Transformation", "Process Improvement", "Team Leadership"]
  }
];

const CaseStudies = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
          In-depth looks at selected projects, highlighting the problems, processes, and outcomes.
        </p>
      </div>

      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.slice(0, 2).map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">More Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.slice(2).map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>

      <div className="bg-light-grey p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a detailed case study?</h2>
        <p className="text-lg text-dark-grey/80 mb-6 max-w-2xl mx-auto">
          If you're interested in learning more about a specific project or methodology, please reach out.
          I'd be happy to provide additional information or schedule a discussion.
        </p>
        <a href="mailto:contact@pmportfolio.com" className="btn-primary inline-block">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
