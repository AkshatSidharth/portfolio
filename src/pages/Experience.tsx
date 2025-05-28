
import { useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Button } from "@/components/ui/button";
import { FileDown, Briefcase, Award, LineChart, TrendingUp, Users, Target } from 'lucide-react';

const experiencesData = [
  {
    title: 'Associate Technical Product Manager',
    company: 'Proem Sports',
    location: 'Bengaluru, India',
    duration: 'May 2024 – Present',
    icon: '🟩',
    briefSummary: 'At Proem Sports, I lead the development of next-generation data-driven solutions for the sports and entertainment industry. My role centers on enhancing fan experiences, optimizing athlete performance, and supporting global sports brands in their digital transformation journey. I\'ve delivered impactful products across customer data platforms, predictive analytics, and e-commerce enablement, working cross-functionally with engineering, marketing, design, and data teams.',
    achievements: [
      'Customer Data & Engagement Platform: Conceptualized and launched an omnichannel engagement platform that unified fragmented fan data into a single view. Enabled marketing teams to build automated, targeted campaigns—resulting in a 30% increase in fan engagement and 16% faster event processing, directly enhancing marketing efficiency.',
      'Predictive Performance Analytics for Athletes: Spearheaded the development of an ML-powered performance module that analyzed biometric and gameplay data. Provided coaches with predictive insights and actionable metrics—leading to a 15% boost in athlete performance and expansion into two new international sports leagues.',
      'E-commerce Optimization for Sports Merchandise: Leveraged user segmentation and behavioral analytics to design a personalization engine for a client\'s e-commerce store. Campaign optimization and personalized targeting drove a 28% increase in merchandise sales within a quarter.',
      'Mobile App UI Revamp: Led end-to-end redesign of the mobile app for a client business. Using data-informed design decisions and usability testing, the new experience improved navigation, engagement, and stickiness—resulting in a 30% increase in daily recurring users within 90 days.'
    ],
    toolsUsed: {
      'Product Management': ['JIRA', 'Productboard', 'Trello'],
      'Design & Prototyping': ['Figma', 'Lucidchart', 'Miro'],
      'Analytics & CDP': ['Mixpanel', 'Amplitude', 'Google Analytics', 'Looker'],
      'User Research': ['Hotjar', 'Maze', 'Intercom', 'SurveyMonkey'],
      'Visualization & Engagement': ['Segment', 'Whimsical']
    }
  },
  {
    title: 'Associate Product Manager',
    company: 'AntWalk (YC W22)',
    location: 'Bengaluru, India',
    duration: 'June 2023 – May 2024',
    icon: '🟦',
    briefSummary: 'At AntWalk, a Y Combinator-backed edtech and talent platform, I led product initiatives spanning personalized learning, B2C platform expansion, and engagement optimization. My work involved end-to-end product ownership—from defining user journeys to driving GTM, shaping data strategies, and integrating AI-based solutions to improve learning outcomes and user growth.',
    achievements: [
      'ML-Powered Learning Recommendations: Designed and deployed an AI-driven recommendation engine that personalized course suggestions based on user behavior and learning goals. This dynamic content delivery led to a 19% increase in course completion rates and a 14% boost in user retention.',
      'B2C Hiring Platform Launch: Conceptualized and led the go-to-market for a new B2C product combining job discovery with personalized upskilling. From MVP wireframes to stakeholder alignment and beta testing, the platform launched successfully and delivered a 12% user acquisition boost with an 8% rise in satisfaction scores in the first quarter.',
      'BFSI Client Dashboards: Built regulatory and performance dashboards for enterprise clients in the BFSI sector, aiding compliance teams and improving workforce efficiency. Resulted in a 20% uplift in workforce performance.',
      'Learning Marketplace & Gamification: Created a two-sided marketplace for vetted industry educators and embedded gamified learning pathways (leaderboards, streaks, badges). These features led to a 22% increase in daily learner activity and drove monetization through premium program enrollments.'
    ],
    toolsUsed: {
      'Product & Sprint Management': ['Notion', 'JIRA', 'Trello'],
      'Data & Analytics': ['Amplitude', 'Google Analytics', 'Hotjar', 'Mixpanel'],
      'UX/UI': ['Figma', 'Maze', 'Miro'],
      'CX & Feedback': ['Zendesk', 'SurveyMonkey', 'Intercom'],
      'Gamification & Marketplace Tools': ['Custom internal admin panels', 'Firebase']
    }
  },
  {
    title: 'Associate Product Manager',
    company: 'Think Talent Services',
    location: 'Gurgaon, India',
    duration: 'January 2022 – June 2023',
    icon: '🟨',
    briefSummary: 'At Think Talent Services, a talent intelligence SaaS company, I led multiple product innovations focused on enterprise assessments, skill diagnostics, and pricing optimization. I worked closely with sales, marketing, and engineering teams to build scalable B2B solutions and drive strategic growth via customer research and data-backed decisions.',
    achievements: [
      'Customizable Digital Assessment Tool: Launched a fully customizable, modular assessment engine that allowed clients to configure tests aligned with their competencies. This innovation improved user engagement by 14% and enhanced usability scores by 13%.',
      'AI-Powered Skill Gap Analysis: Partnered with the data science team to roll out a machine learning tool that analyzed skill data and mapped gaps against role requirements. Reduced assessment time by 20%, improved accuracy by 10%, and directly helped clients optimize hiring decisions and upskilling roadmaps.',
      'SaaS Pricing Strategy Overhaul: Led a pricing audit and competitor benchmarking initiative that culminated in a revamped pricing model based on customer size, usage, and ROI. This strategic change resulted in a 30% increase in average contract value and a 5% rise in LTV.',
      'Strategic Market Research: Conducted primary and secondary research to understand enterprise pain points in talent development. Influenced product positioning and roadmaps—contributing to an 11% gain in market share and 16% increase in CSAT.'
    ],
    toolsUsed: {
      'Market Research & Analysis': ['Google Sheets', 'SurveyMonkey', 'Miro'],
      'Design & Prototyping': ['Lucidchart', 'Figma', 'Whimsical'],
      'Product Analytics': ['Tableau', 'Looker'],
      'Documentation & PM Tools': ['Notion', 'JIRA'],
      'Customer Feedback': ['Hotjar', 'Zendesk']
    }
  }
];

const skillsData = {
  product: [
    'Product Strategy & Roadmapping',
    'Agile & Scrum Methodologies',
    'B2B SaaS Development',
    'Customer Engagement Platforms',
    'Digital Transformation',
    'Customer Data Platforms (CDP)',
    'Product Lifecycle Management'
  ],
  technical: [
    'API Integrations & Management',
    'Advanced Data Analytics',
    'Feature Prioritization Frameworks',
    'Technical Product Management',
    'A/B Testing & Experimentation',
    'Conversion Rate Optimization',
    'Machine Learning Implementation'
  ],
  research: [
    'User Research & Persona Development',
    'Market Analysis & Competitive Intelligence',
    'Competitive Research & Benchmarking',
    'Customer Journey Mapping',
    'KPI Tracking & Performance Reporting',
    'Cross-functional Team Leadership',
    'Stakeholder Management'
  ],
  tools: [
    'JIRA & Confluence',
    'Asana & Monday.com',
    'ProductBoard & Roadmunk',
    'Google Analytics & GA4',
    'Amplitude & Mixpanel',
    'Figma & Adobe Creative Suite',
    'Miro & Lucidchart',
    'Tableau & Power BI',
    'Hotjar & FullStory'
  ]
};

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-narrow mx-auto px-4 py-12">
      <div className="mb-16 text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-gradient">Professional Experience</h1>
        <p className="text-xl text-warm-chocolate max-w-3xl mx-auto leading-relaxed">
          3+ years of strategic product management experience driving innovation across customer data platforms, 
          analytics solutions, and digital transformation initiatives. Proven track record of delivering measurable 
          business impact through data-driven product strategies and cross-functional leadership.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="w-6 h-6 text-accent-bronze" />
          <h2 className="text-3xl font-semibold text-warm-espresso">Professional Journey</h2>
        </div>
        
        <div className="space-y-12 relative">
          <div className="absolute left-[24px] top-8 bottom-0 w-0.5 bg-warm-sand/70"></div>
          {experiencesData.map((exp, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 animate-fade-in">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-6 h-6 text-accent-bronze" />
          <h2 className="text-3xl font-semibold text-warm-espresso">Core Competencies & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-warm-ivory rounded-xl p-8 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-warm-espresso flex items-center gap-2">
              <Target className="w-5 h-5 text-accent-bronze" />
              Product Management
            </h3>
            <ul className="space-y-3">
              {skillsData.product.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-bronze mt-1.5 text-lg">•</span>
                  <span className="text-warm-chocolate font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-warm-ivory rounded-xl p-8 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-warm-espresso flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent-bronze" />
              Technical Skills
            </h3>
            <ul className="space-y-3">
              {skillsData.technical.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-bronze mt-1.5 text-lg">•</span>
                  <span className="text-warm-chocolate font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-warm-ivory rounded-xl p-8 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-warm-espresso flex items-center gap-2">
              <Users className="w-5 h-5 text-accent-bronze" />
              Research & Strategy
            </h3>
            <ul className="space-y-3">
              {skillsData.research.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-bronze mt-1.5 text-lg">•</span>
                  <span className="text-warm-chocolate font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-warm-ivory rounded-xl p-8 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-warm-espresso flex items-center gap-2">
              <LineChart className="w-5 h-5 text-accent-bronze" />
              Tools & Software
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-warm-cream text-warm-chocolate text-sm font-medium rounded-lg hover:bg-warm-beige transition-colors border border-warm-sand"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-12 px-10 bg-gradient-to-br from-accent-bronze/10 via-warm-ivory to-accent-gold/10 rounded-xl border border-warm-beige overflow-hidden shadow-xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <FileDown className="w-6 h-6 text-accent-bronze" />
            <h2 className="text-3xl font-semibold text-warm-espresso">Complete Professional Portfolio</h2>
          </div>
          <p className="text-warm-chocolate mb-8 max-w-2xl text-lg leading-relaxed">
            Interested in the complete details of my professional journey? Download my comprehensive resume for an 
            in-depth overview of my experience, technical skills, educational background, and key achievements 
            across all product management roles.
          </p>
          <Button size="lg" className="bg-accent-bronze hover:bg-accent-copper text-warm-cream font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="/files/resume.pdf" download>
              <FileDown className="mr-3 h-5 w-5" />
              Download Complete Resume
            </a>
          </Button>
        </div>
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-accent-gold/10 blur-3xl"></div>
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-accent-bronze/10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Experience;
