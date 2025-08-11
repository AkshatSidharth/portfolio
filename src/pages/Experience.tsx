
import { useEffect } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: "proem-sports",
    company: "Proem Sports",
    role: "Associate Technical Product Manager",
    location: "Bengaluru, India",
    period: "May 2024 – January 2025",
    summary: "At Proem Sports, I lead the development of next-generation data-driven solutions for the sports and entertainment industry. My role centers on enhancing fan experiences, optimizing athlete performance, and supporting global sports brands in their digital transformation journey.",
    achievements: [
      "Customer Data & Engagement Platform: Conceptualized and launched an omnichannel engagement platform that unified fragmented fan data into a single view. Enabled marketing teams to build automated, targeted campaigns—resulting in a 30% increase in fan engagement and 16% faster event processing.",
      "Predictive Performance Analytics for Athletes: Spearheaded the development of an ML-powered performance module that analyzed biometric and gameplay data. Provided coaches with predictive insights and actionable metrics—leading to a 15% boost in athlete performance.",
      "E-commerce Optimization for Sports Merchandise: Leveraged user segmentation and behavioral analytics to design a personalization engine. Campaign optimization and personalized targeting drove a 28% increase in merchandise sales within a quarter.",
      "Mobile App UI Revamp: Led end-to-end redesign of the mobile app for a client business. Using data-informed design decisions, the new experience improved navigation and engagement—resulting in a 30% increase in daily recurring users within 90 days."
    ],
    tools: ["JIRA", "Productboard", "Figma", "Mixpanel", "Amplitude", "Google Analytics", "Looker", "Hotjar", "Maze", "Segment"]
  },
  {
    id: "antwalk",
    company: "AntWalk (YC W22)",
    role: "Associate Product Manager",
    location: "Bengaluru, India",
    period: "June 2023 – May 2024",
    summary: "At AntWalk, a Y Combinator-backed edtech and talent platform, I led product initiatives spanning personalized learning, B2C platform expansion, and engagement optimization. My work involved end-to-end product ownership—from defining user journeys to driving GTM strategies.",
    achievements: [
      "ML-Powered Learning Recommendations: Designed and deployed an AI-driven recommendation engine that personalized course suggestions based on user behavior and learning goals. This dynamic content delivery led to a 19% increase in course completion rates and a 14% boost in user retention.",
      "B2C Hiring Platform Launch: Conceptualized and led the go-to-market for a new B2C product combining job discovery with personalized upskilling. The platform launched successfully and delivered a 12% user acquisition boost with an 8% rise in satisfaction scores.",
      "BFSI Client Dashboards: Built regulatory and performance dashboards for enterprise clients in the BFSI sector, aiding compliance teams and improving workforce efficiency. Resulted in a 20% uplift in workforce performance.",
      "Learning Marketplace & Gamification: Created a two-sided marketplace for vetted industry educators and embedded gamified learning pathways. These features led to a 22% increase in daily learner activity and drove monetization through premium program enrollments."
    ],
    tools: ["Notion", "JIRA", "Amplitude", "Google Analytics", "Figma", "Maze", "Miro", "Zendesk", "SurveyMonkey", "Firebase"]
  },
  {
    id: "think-talent",
    company: "Think Talent Services",
    role: "Associate Product Manager",
    location: "Gurgaon, India",
    period: "January 2022 – June 2023",
    summary: "At Think Talent Services, a talent intelligence SaaS company, I led multiple product innovations focused on enterprise assessments, skill diagnostics, and pricing optimization. I worked closely with sales, marketing, and engineering teams to build scalable B2B solutions.",
    achievements: [
      "Customizable Digital Assessment Tool: Launched a fully customizable, modular assessment engine that allowed clients to configure tests aligned with their competencies. This innovation improved user engagement by 14% and enhanced usability scores by 13%.",
      "AI-Powered Skill Gap Analysis: Partnered with the data science team to roll out a machine learning tool that analyzed skill data and mapped gaps against role requirements. Reduced assessment time by 20% and improved accuracy by 10%.",
      "SaaS Pricing Strategy Overhaul: Led a pricing audit and competitor benchmarking initiative that culminated in a revamped pricing model. This strategic change resulted in a 30% increase in average contract value and a 5% rise in LTV.",
      "Strategic Market Research: Conducted primary and secondary research to understand enterprise pain points in talent development. Influenced product positioning and roadmaps—contributing to an 11% gain in market share and 16% increase in CSAT."
    ],
    tools: ["Google Sheets", "SurveyMonkey", "Miro", "Lucidchart", "Figma", "Tableau", "Looker", "Notion", "JIRA", "Hotjar", "Zendesk"]
  }
];

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm font-mono text-gray-600 tracking-wider">PROFESSIONAL JOURNEY</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-none mb-8">
            Experience
          </h1>
          
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            My journey as a product manager across different industries, 
            building impactful solutions and driving meaningful outcomes.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="group relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 md:left-8"></div>
                <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-1.5 top-8 md:left-6.5 group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="pl-8 md:pl-20">
                  <div className="bg-white hover:bg-gray-50 p-8 md:p-12 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-gray-100">
                    {/* Company Header */}
                    <div className="mb-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-0">
                          {exp.company}
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-xl text-gray-700 font-light mb-2">{exp.role}</p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8">
                      <p className="text-lg text-gray-600 leading-relaxed font-light">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-4 group/item">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 group-hover/item:bg-gray-900 transition-colors duration-300"></div>
                            <p className="text-gray-600 leading-relaxed font-light">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's Work
              <br />
              <span className="font-light italic">Together</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Interested in discussing product strategy, user experience, or digital transformation? 
              I'd love to hear from you.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-none hover:scale-105 transition-all duration-300 group" 
              asChild
            >
              <a href="mailto:akshatsid36@gmail.com?subject=Let's Work Together">
                <span className="mr-2">Get in Touch</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
