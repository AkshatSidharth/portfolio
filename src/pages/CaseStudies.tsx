
import { useEffect } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const caseStudiesData = [
  {
    id: "cdp-engagement",
    title: "Customer Data Platform & Engagement System",
    company: "Proem Sports",
    description: "How we built an integrated CDP to enhance user engagement across digital touchpoints for sports organizations.",
    image: "https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=1000",
    tags: ["Customer Data", "Engagement Automation", "Analytics", "Sports Tech"]
  },
  {
    id: "ml-recommendations",
    title: "ML-Powered Learning Recommendations",
    company: "AntWalk",
    description: "Implementing personalized learning recommendations that increased completion rates and user retention.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000",
    tags: ["Machine Learning", "Personalization", "EdTech", "User Retention"]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard for BFSI Clients",
    company: "AntWalk",
    description: "Creating data visualization solutions that improved compliance tracking and risk management for banking clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tags: ["Data Visualization", "BFSI", "Compliance", "Performance Tracking"]
  },
  {
    id: "b2c-platform",
    title: "B2C Hiring & Skill Building Platform",
    company: "AntWalk",
    description: "A case study on developing an integrated platform combining job search with personalized learning resources.",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1000",
    tags: ["B2C Products", "Hiring Platforms", "Skill Development", "User Acquisition"]
  },
  {
    id: "saas-pricing",
    title: "Data-Driven SaaS Pricing Strategy",
    company: "Think Talent Services",
    description: "How we optimized our pricing model to increase average contract value while maintaining customer satisfaction.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000",
    tags: ["SaaS Pricing", "Revenue Optimization", "Market Research", "Customer Value"]
  }
];

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Case Studies</h1>
        <p className="text-lg text-mono-slate max-w-2xl mx-auto">
          Detailed examinations of key projects, highlighting challenges, methodologies, and measurable outcomes.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.slice(0, 2).map((caseStudy) => (
            <div key={caseStudy.id} className="animate-fade-in">
              <CaseStudyCard {...caseStudy} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.slice(2).map((caseStudy, index) => (
            <div 
              key={caseStudy.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CaseStudyCard {...caseStudy} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-mono-ghost p-8 rounded-lg text-center border border-mono-light">
        <h2 className="text-2xl font-semibold mb-4">Looking for Custom Case Studies?</h2>
        <p className="text-mono-slate mb-6 max-w-2xl mx-auto">
          If you're interested in a specific aspect of my work or want more details about a particular project,
          I'd be happy to discuss and provide additional information.
        </p>
        <Button variant="default" size="lg" className="group" asChild>
          <a href="mailto:akshatsid36@gmail.com">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudies;
