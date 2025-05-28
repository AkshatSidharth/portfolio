
import { useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Button } from "@/components/ui/button";
import { FileDown, Briefcase, Award, LineChart, TrendingUp, Users, Target } from 'lucide-react';

const experiencesData = [
  {
    title: 'Associate Technical Product Manager',
    company: 'Proem Sports',
    location: 'Bengaluru, India',
    duration: 'May 2024 - Present',
    description: 'Leading technical product initiatives focused on data platforms and analytics for sports technology. Spearheading the development of customer engagement solutions and predictive analytics systems that drive athlete performance optimization and business growth. Working closely with engineering teams to build scalable data infrastructure and user-centric mobile experiences.',
    highlights: [
      'Developed a comprehensive Customer Data & Engagement Platform that increased user stickiness by 30% and improved event data processing efficiency by 16% through advanced analytics and personalization engines',
      'Engineered predictive analytics models for sports performance optimization, increasing athlete efficiency by 15% and supporting strategic market expansion into 3 new geographic regions',
      'Optimized e-commerce strategy for sports merchandise with data-driven personalization algorithms, boosting sales conversion rates by 28% and average order value by 22%',
      'Redesigned mobile app UI/UX with comprehensive user research and data-driven approach, resulting in 30% increase in daily recurring users and 45% improvement in session duration within three months',
      'Led cross-functional teams of 8+ members including engineers, designers, and data scientists to deliver product features ahead of schedule'
    ],
    technologies: ['Customer Data Platforms', 'Machine Learning & AI', 'Advanced Data Analytics', 'Mobile UX/UI Design', 'E-commerce Optimization', 'Predictive Modeling', 'Cross-functional Leadership'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop&crop=center'
  },
  {
    title: 'Associate Product Manager',
    company: 'AntWalk (YC 22)',
    location: 'Bengaluru, India',
    duration: 'June 2023 - May 2024',
    description: 'Led end-to-end product development for learning platforms and enterprise analytics solutions serving Fortune 500 clients in BFSI sector. Orchestrated the design and implementation of ML-powered recommendation systems while establishing new revenue streams through marketplace development. Managed product strategy for both B2B enterprise solutions and B2C consumer platforms.',
    highlights: [
      'Designed and launched comprehensive analytical dashboards for BFSI clients that improved compliance tracking accuracy by 35% and risk management efficiency, resulting in 20% workforce performance improvement and $2M+ cost savings',
      'Implemented sophisticated ML-powered recommendation engine using collaborative filtering and content-based algorithms, increasing course completion rates by 19% and user retention by 14% across 50K+ active learners',
      'Successfully launched B2C hiring platform combining intelligent job matching with personalized skill-building resources, driving 12% user acquisition growth and achieving 8% higher satisfaction scores than competitors',
      'Established learning marketplace connecting 200+ industry experts with learners, enabling custom program sales and expanding revenue streams by 25% within 6 months',
      'Integrated comprehensive gamification features including achievement systems, leaderboards, and progress tracking that increased daily learner engagement by 22% and reduced course dropout rates by 18%',
      'Conducted extensive user research with 1000+ participants to inform product roadmap and feature prioritization'
    ],
    technologies: ['Advanced Data Analytics', 'ML Recommendation Systems', 'Marketplace Development', 'Gamification Design', 'B2B/B2C Product Strategy', 'User Research', 'Revenue Optimization'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center'
  },
  {
    title: 'Associate Product Manager',
    company: 'Think Talent Services',
    location: 'Gurgaon, India',
    duration: 'January 2022 - June 2023',
    description: 'Developed and launched innovative digital assessment and talent management solutions for enterprise clients across multiple industries. Led comprehensive market research initiatives and strategic pricing model development while building AI-powered recruitment tools that transformed traditional hiring processes. Focused on creating scalable SaaS solutions that addressed critical talent acquisition challenges.',
    highlights: [
      'Conducted strategic market research across 15+ industry verticals that informed comprehensive product roadmap, contributing to 11% market share growth and 16% higher customer satisfaction scores year-over-year',
      'Launched highly customizable digital assessment platform with 50+ assessment templates that improved hiring flexibility by 40%, driving 24% higher candidate engagement and 17% better user experience ratings',
      'Formulated and implemented data-driven SaaS pricing strategy that resolved revenue inconsistencies and optimized pricing models across customer segments, increasing average contract value by 30% and reducing churn by 15%',
      'Enabled D2C brand optimization for hiring through AI-powered skill gap analysis and candidate matching algorithms, reducing assessment time by 40% and improving hiring accuracy by 10% for 100+ client organizations',
      'Built comprehensive analytics dashboard providing real-time insights into hiring funnel performance and candidate quality metrics',
      'Managed product lifecycle from conception to launch for 5+ major features, coordinating with stakeholders across sales, marketing, and engineering teams'
    ],
    technologies: ['SaaS Pricing Models', 'Digital Assessment Platforms', 'Market Research & Analysis', 'AI-powered Analytics', 'Enterprise Solutions', 'Talent Management Systems', 'Revenue Strategy'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center'
  }
];

const metricsData = [
  {
    icon: TrendingUp,
    value: '30%',
    label: 'Average Performance Improvement',
    description: 'Across all product initiatives'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Users Impacted',
    description: 'Through platform improvements'
  },
  {
    icon: Target,
    value: '15+',
    label: 'Products Launched',
    description: 'From concept to market'
  },
  {
    icon: LineChart,
    value: '$2M+',
    label: 'Revenue Impact',
    description: 'Generated through optimizations'
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

      {/* Key Metrics Section */}
      <div className="mb-16 animate-fade-in">
        <h2 className="text-3xl font-semibold text-center mb-8 text-warm-espresso">Impact at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => (
            <div 
              key={index}
              className="bg-warm-ivory rounded-xl p-6 border border-warm-beige shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <metric.icon className="w-8 h-8 text-accent-bronze" />
              </div>
              <div className="text-3xl font-bold text-warm-espresso mb-2">{metric.value}</div>
              <div className="text-lg font-medium text-warm-brown mb-1">{metric.label}</div>
              <div className="text-sm text-warm-chocolate">{metric.description}</div>
            </div>
          ))}
        </div>
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
