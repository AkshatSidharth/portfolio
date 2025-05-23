
import ExperienceCard from '../components/ExperienceCard';
import Carousel from '../components/Carousel';

const experiencesData = [
  {
    title: 'Associate Technical Product Manager',
    company: 'Proem Sports',
    duration: 'May 2024 - Present',
    description: 'Leading the development of customer data platforms and engagement tools for sports organizations, focusing on data-driven insights and performance analytics.',
    highlights: [
      'Led the development of a Customer Data & Engagement Platform, integrating omnichannel engagement campaigns builder, resulting in a 30% increase in user stickiness on our client\'s marketing campaigns and 16% faster event data processing.',
      'Engineered a predictive analytics module for sports, using ML to enhance athlete performance by 15% and support expansion into new markets.',
      'Optimized the e-commerce marketplace strategy for a sports merchandise client, leveraging data-driven user insights and personalized engagement campaigns, leading to a 28% increase in merchandise sales.',
      'Redesigned the mobile app UI, applying data-driven design to improve user experience, leading to a 30% rise in daily recurring users of the client\'s business application within a span of three months.'
    ],
    technologies: ['Customer Data Platforms', 'Predictive Analytics', 'E-commerce', 'Mobile App Design', 'ML'],
    image: 'https://placehold.co/200x200/e5e5e5/2a2a2a?text=PS'
  },
  {
    title: 'Associate Product Manager',
    company: 'AntWalk (YC 22)',
    duration: 'June 2023 - May 2024',
    description: 'Developed analytical solutions for BFSI clients and built personalized learning experiences using ML recommendation systems.',
    highlights: [
      'Designed analytical dashboards for BFSI clients, improving compliance tracking and risk management, which led a 20% improvement in their workforce performance.',
      'Implemented an ML-powered recommendation engine for personalized learning, increasing course completion rates by 19% and user retention by 14% by tailoring content to individual learners learning patterns.',
      'Spearheaded the launch of a B2C hiring platform, from scratch combining job search with skill-building learning resources, resulting in a 12% increase in user acquisition and an 8% rise in customer satisfaction within one quarter.',
      'Established a learning marketplace, allowing vetted industry experts and educators to sell bespoke learning programs, expanding revenue streams and increasing platform adoption.',
      'Integrated gamification to improve user engagement, leading to a 22% increase in daily learners count on the B2B learning platform and higher overall participation.'
    ],
    technologies: ['Analytics Dashboards', 'ML Recommendation Engines', 'B2C Platforms', 'Marketplace Design', 'Gamification'],
    image: 'https://placehold.co/200x200/e5e5e5/2a2a2a?text=AW'
  },
  {
    title: 'Associate Product Manager',
    company: 'Think Talent Services',
    duration: 'January 2022 - June 2023',
    description: 'Conducted market research and developed digital assessment tools for HR and talent management clients, optimizing revenue models and enhancing user experience.',
    highlights: [
      'Conducted market research to identify customer pain points, informing key product and marketing strategies that contributed to a 11% market share increase and a 16% boost in customer satisfaction.',
      'Launched a customizable digital assessment tool, improving flexibility and driving a 24% increase in user engagement and a 17% enhancement in user experience.',
      'Formulated a data-driven SaaS pricing strategy, resolving inconsistencies and optimizing revenue models, leading to a 30% rise in average contract value and a 5% increase in customer lifetime value.',
      'Enabled a D2C brand to optimize hiring and workforce development by launching an AI-powered skill gap analysis, reducing assessment time by 40% and improving accuracy by 10%, leading to better talent acquisition and retention.'
    ],
    technologies: ['Market Research', 'Digital Assessment Tools', 'SaaS Pricing', 'Skill Gap Analysis', 'AI'],
    image: 'https://placehold.co/200x200/e5e5e5/2a2a2a?text=TTS'
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-2">
          <div className="line-indicator"></div>
          <span className="text-medium-grey text-sm">My Career</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-lg text-dark-grey max-w-2xl">
          My journey through product management roles across different companies and industries.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="line-indicator"></span>
          Professional Timeline
        </h2>
        
        <div className="hidden md:block">
          {/* Desktop view - All cards at once */}
          <div className="space-y-6">
            {experiencesData.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          {/* Mobile view - Carousel */}
          <Carousel autoScroll={true} autoScrollInterval={7000}>
            {experiencesData.map((exp, index) => (
              <div key={index} className="px-2">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="line-indicator"></span>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card hover-lift">
            <div className="mb-3">
              <div className="w-8 h-0.5 bg-dark-grey mb-2"></div>
              <h3 className="text-xl font-medium">Product Management</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Product Strategy & Vision</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Roadmap Planning</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>User Story Creation</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Requirements Gathering</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Feature Prioritization</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover-lift">
            <div className="mb-3">
              <div className="w-8 h-0.5 bg-dark-grey mb-2"></div>
              <h3 className="text-xl font-medium">Research & Analysis</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>User Research</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Market Analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Competitive Research</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Data Analytics</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>User Testing</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover-lift">
            <div className="mb-3">
              <div className="w-8 h-0.5 bg-dark-grey mb-2"></div>
              <h3 className="text-xl font-medium">Leadership & Collaboration</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Cross-functional Team Leadership</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Stakeholder Communication</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Agile Methodology</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Sprint Planning</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Technical Communication</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover-lift">
            <div className="mb-3">
              <div className="w-8 h-0.5 bg-dark-grey mb-2"></div>
              <h3 className="text-xl font-medium">Tools & Software</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>JIRA & Asana</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Figma & Miro</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Google Analytics & Amplitude</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Tableau & Looker</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-dark-grey rounded-full mr-3"></span>
                <span>Hotjar & Intercom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="line-indicator"></span>
          Education
        </h2>
        
        <div className="card hover-lift">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Trident Academy of Technology</h3>
              <p className="text-medium-grey mb-2">Bhubaneswar, Odisha</p>
              <p className="text-dark-grey">Bachelors of Technology in Electrical and Electronics Engineering</p>
            </div>
            <div>
              <span className="text-sm text-medium-grey bg-light-grey/30 px-3 py-1 rounded-full">May 2018 - July 2022</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-0.5 bg-dark-grey"></div>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Ready to collaborate?</h2>
        <p className="text-lg text-dark-grey mb-6 max-w-2xl mx-auto">
          Download my complete resume for a detailed overview of my professional background and qualifications.
        </p>
        <a href="/files/resume.pdf" download className="btn-primary inline-block">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
