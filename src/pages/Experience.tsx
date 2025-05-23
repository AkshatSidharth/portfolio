
import { useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Button } from "@/components/ui/button";
import { FileDown } from 'lucide-react';

const experiencesData = [
  {
    title: 'Associate Technical Product Manager',
    company: 'Proem Sports',
    location: 'Bengaluru, India',
    duration: 'May 2024 - Present',
    description: 'Leading technical product initiatives focused on data platforms and analytics for sports technology.',
    highlights: [
      'Developed a Customer Data & Engagement Platform that increased user stickiness by 30% and improved event data processing by 16%',
      'Engineered predictive analytics for sports performance, increasing athlete efficiency by 15% and supporting market expansion',
      'Optimized e-commerce strategy for sports merchandise with data-driven personalization, boosting sales by 28%',
      'Redesigned mobile app UI with data-driven approach, resulting in 30% increase in daily recurring users within three months'
    ],
    technologies: ['Customer Data Platforms', 'ML/AI', 'Data Analytics', 'Mobile UX/UI', 'E-commerce Optimization'],
    image: 'https://placehold.co/200x200/e5e5e5/333333?text=PS'
  },
  {
    title: 'Associate Product Manager',
    company: 'AntWalk (YC 22)',
    location: 'Bengaluru, India',
    duration: 'June 2023 - May 2024',
    description: 'Led product development for learning platforms and data analytics solutions for enterprise clients.',
    highlights: [
      'Designed analytical dashboards for BFSI clients that improved compliance tracking and risk management, resulting in 20% workforce performance improvement',
      'Implemented ML-powered recommendation engine that increased course completion rates by 19% and user retention by 14%',
      'Launched B2C hiring platform combining job search with skill-building resources, driving 12% user acquisition growth and 8% higher satisfaction',
      'Established learning marketplace for industry experts to sell custom programs, expanding revenue streams',
      'Integrated gamification features that increased daily learner engagement by 22%'
    ],
    technologies: ['Data Analytics', 'ML Recommendations', 'Marketplace Development', 'Gamification', 'B2B/B2C Product Strategy'],
    image: 'https://placehold.co/200x200/e5e5e5/333333?text=AW'
  },
  {
    title: 'Associate Product Manager',
    company: 'Think Talent Services',
    location: 'Gurgaon, India',
    duration: 'January 2022 - June 2023',
    description: 'Developed digital assessment and talent management solutions for enterprise clients.',
    highlights: [
      'Conducted strategic market research that informed product roadmap, contributing to 11% market share growth and 16% higher customer satisfaction',
      'Launched customizable digital assessment tools that improved flexibility, driving 24% higher engagement and 17% better user experience',
      'Formulated data-driven SaaS pricing strategy that resolved inconsistencies and optimized revenue models, increasing average contract value by 30%',
      'Enabled D2C brand optimization for hiring through AI-powered skill gap analysis, reducing assessment time by 40% and improving accuracy by 10%'
    ],
    technologies: ['SaaS Pricing Models', 'Digital Assessments', 'Market Research', 'AI-powered Analytics', 'Enterprise Solutions'],
    image: 'https://placehold.co/200x200/e5e5e5/333333?text=TTS'
  }
];

const skillsData = {
  product: [
    'Product Strategy & Roadmaps',
    'Agile & Scrum',
    'B2B SaaS Development',
    'Customer Engagement',
    'Digital Transformation',
    'Customer Data Platforms (CDP)'
  ],
  technical: [
    'API Integrations',
    'Data Analytics',
    'Feature Prioritization',
    'Technical Product Management',
    'A/B Testing',
    'Conversion Rate Optimization'
  ],
  research: [
    'User Research',
    'Market Analysis',
    'Competitive Research',
    'Journey Mapping',
    'KPI Tracking & Reporting',
    'Cross-functional Leadership'
  ],
  tools: [
    'JIRA',
    'Asana',
    'Product Board',
    'Google Analytics',
    'Amplitude',
    'Figma',
    'Miro',
    'Tableau',
    'Hotjar'
  ]
};

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-narrow mx-auto px-4 py-12">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-lg text-mono-slate max-w-2xl mx-auto">
          3+ years of product management experience across customer data platforms, analytics solutions, and digital transformation.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Professional Journey</h2>
        
        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <div className="mb-16 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-mono-white rounded-lg p-6 border border-mono-light shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-mono-black">Product Management</h3>
            <ul className="space-y-2">
              {skillsData.product.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span className="text-mono-slate text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-mono-white rounded-lg p-6 border border-mono-light shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-mono-black">Technical Skills</h3>
            <ul className="space-y-2">
              {skillsData.technical.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span className="text-mono-slate text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-mono-white rounded-lg p-6 border border-mono-light shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-mono-black">Research & Strategy</h3>
            <ul className="space-y-2">
              {skillsData.research.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent-teal mt-1">•</span>
                  <span className="text-mono-slate text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-mono-white rounded-lg p-6 border border-mono-light shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-mono-black">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-mono-ghost text-mono-slate text-sm rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 bg-mono-ghost rounded-lg border border-mono-light">
        <h2 className="text-2xl font-semibold mb-6">Want the complete details?</h2>
        <p className="text-mono-slate mb-6 max-w-lg mx-auto">
          Download my resume for a comprehensive overview of my professional experience, skills, and qualifications.
        </p>
        <Button size="lg" asChild>
          <a href="/files/resume.pdf" download>
            <FileDown className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
