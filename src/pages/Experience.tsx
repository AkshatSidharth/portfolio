
import ExperienceCard from '../components/ExperienceCard';
import Carousel from '../components/Carousel';

const experiencesData = [
  {
    title: 'Senior Product Manager',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2022 - Present',
    description: 'Led cross-functional teams to design, develop, and launch innovative digital products that address user needs while achieving business objectives.',
    highlights: [
      'Spearheaded the development of a new mobile app that increased user engagement by 45%',
      'Defined product strategy and roadmap for the company\'s flagship SaaS platform',
      'Conducted user research and usability testing to inform product decisions',
      'Collaborated with engineering, design, and marketing teams to ensure successful product launches',
    ],
    technologies: ['Jira', 'Figma', 'Google Analytics', 'Amplitude', 'SQL'],
    image: 'https://placehold.co/200x200/e5e5e5/cccccc?text=Tech+Inc'
  },
  {
    title: 'Product Manager',
    company: 'Digital Solutions Co.',
    duration: 'Mar 2020 - Dec 2021',
    description: 'Managed the product lifecycle from conception to launch for web-based enterprise solutions focused on improving operational efficiency.',
    highlights: [
      'Developed product requirements and specifications based on customer feedback and market research',
      'Prioritized features and enhancements for quarterly release cycles',
      'Reduced development cycle time by 30% through process improvements',
      'Launched 3 major feature releases that collectively increased customer retention by 25%',
    ],
    technologies: ['Asana', 'Sketch', 'Mixpanel', 'Tableau', 'Intercom'],
    image: 'https://placehold.co/200x200/e5e5e5/cccccc?text=Digital+Co'
  },
  {
    title: 'Associate Product Manager',
    company: 'StartUp Ventures',
    duration: 'Jun 2018 - Feb 2020',
    description: 'Assisted in developing product features for an early-stage startup focused on B2B communication tools, gathering requirements and coordinating with development teams.',
    highlights: [
      'Conducted competitive analysis to identify market opportunities',
      'Created user stories and acceptance criteria for development teams',
      'Facilitated agile ceremonies including sprint planning and retrospectives',
      'Analyzed user feedback to identify improvement areas and feature opportunities',
    ],
    technologies: ['Trello', 'InVision', 'Hotjar', 'Google Analytics', 'Slack'],
    image: 'https://placehold.co/200x200/e5e5e5/cccccc?text=StartUp'
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
          My journey through product management roles across different industries and companies.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">My Career Timeline</h2>
        
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
        <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-medium mb-4">Product Management</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Product Strategy & Vision</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Roadmap Planning</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>User Story Creation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Requirements Gathering</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Feature Prioritization</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-medium mb-4">Research & Analysis</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>User Research</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Market Analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Competitive Research</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Data Analytics</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>User Testing</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-medium mb-4">Leadership & Collaboration</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Cross-functional Team Leadership</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Stakeholder Communication</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Agile Methodology</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Sprint Planning</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Technical Communication</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-medium mb-4">Tools & Software</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Jira & Confluence</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Figma & Sketch</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Google Analytics & Amplitude</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>SQL & Data Visualization</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dark-grey rounded-full mr-3"></span>
                <span>Miro & Whimsical</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6">Interested in my experience?</h2>
        <p className="text-lg text-dark-grey/80 mb-6 max-w-2xl mx-auto">
          Download my resume for a detailed overview of my professional background and qualifications.
        </p>
        <a href="/files/resume.pdf" download className="btn-primary inline-block">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
