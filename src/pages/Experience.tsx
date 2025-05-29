
import { useEffect } from 'react';
import { ArrowRight, Calendar, Award, Briefcase, Users, TrendingUp, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: "proem-sports",
    company: "Proem Sports",
    role: "Associate Technical Product Manager",
    location: "Bengaluru, India",
    period: "May 2024 – Present",
    color: "bg-emerald-50 border-emerald-200",
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    summary: "At Proem Sports, I lead the development of next-generation data-driven solutions for the sports and entertainment industry. My role centers on enhancing fan experiences, optimizing athlete performance, and supporting global sports brands in their digital transformation journey. I've delivered impactful products across customer data platforms, predictive analytics, and e-commerce enablement, working cross-functionally with engineering, marketing, design, and data teams.",
    achievements: [
      "Customer Data & Engagement Platform: Conceptualized and launched an omnichannel engagement platform that unified fragmented fan data into a single view. Enabled marketing teams to build automated, targeted campaigns—resulting in a 30% increase in fan engagement and 16% faster event processing, directly enhancing marketing efficiency.",
      "Predictive Performance Analytics for Athletes: Spearheaded the development of an ML-powered performance module that analyzed biometric and gameplay data. Provided coaches with predictive insights and actionable metrics—leading to a 15% boost in athlete performance and expansion into two new international sports leagues.",
      "E-commerce Optimization for Sports Merchandise: Leveraged user segmentation and behavioral analytics to design a personalization engine for a client's e-commerce store. Campaign optimization and personalized targeting drove a 28% increase in merchandise sales within a quarter.",
      "Mobile App UI Revamp: Led end-to-end redesign of the mobile app for a client business. Using data-informed design decisions and usability testing, the new experience improved navigation, engagement, and stickiness—resulting in a 30% increase in daily recurring users within 90 days."
    ],
    tools: {
      "Product Management": ["JIRA", "Productboard", "Trello"],
      "Design & Prototyping": ["Figma", "Lucidchart", "Miro"],
      "Analytics & CDP": ["Mixpanel", "Amplitude", "Google Analytics", "Looker"],
      "User Research": ["Hotjar", "Maze", "Intercom", "SurveyMonkey"],
      "Visualization & Engagement": ["Segment", "Whimsical"]
    }
  },
  {
    id: "antwalk",
    company: "AntWalk (YC W22)",
    role: "Associate Product Manager",
    location: "Bengaluru, India",
    period: "June 2023 – May 2024",
    color: "bg-blue-50 border-blue-200",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    summary: "At AntWalk, a Y Combinator-backed edtech and talent platform, I led product initiatives spanning personalized learning, B2C platform expansion, and engagement optimization. My work involved end-to-end product ownership—from defining user journeys to driving GTM, shaping data strategies, and integrating AI-based solutions to improve learning outcomes and user growth.",
    achievements: [
      "ML-Powered Learning Recommendations: Designed and deployed an AI-driven recommendation engine that personalized course suggestions based on user behavior and learning goals. This dynamic content delivery led to a 19% increase in course completion rates and a 14% boost in user retention.",
      "B2C Hiring Platform Launch: Conceptualized and led the go-to-market for a new B2C product combining job discovery with personalized upskilling. From MVP wireframes to stakeholder alignment and beta testing, the platform launched successfully and delivered a 12% user acquisition boost with an 8% rise in satisfaction scores in the first quarter.",
      "BFSI Client Dashboards: Built regulatory and performance dashboards for enterprise clients in the BFSI sector, aiding compliance teams and improving workforce efficiency. Resulted in a 20% uplift in workforce performance.",
      "Learning Marketplace & Gamification: Created a two-sided marketplace for vetted industry educators and embedded gamified learning pathways (leaderboards, streaks, badges). These features led to a 22% increase in daily learner activity and drove monetization through premium program enrollments."
    ],
    tools: {
      "Product & Sprint Management": ["Notion", "JIRA", "Trello"],
      "Data & Analytics": ["Amplitude", "Google Analytics", "Hotjar", "Mixpanel"],
      "UX/UI": ["Figma", "Maze", "Miro"],
      "CX & Feedback": ["Zendesk", "SurveyMonkey", "Intercom"],
      "Gamification & Marketplace": ["Custom internal admin panels", "Firebase"]
    }
  },
  {
    id: "think-talent",
    company: "Think Talent Services",
    role: "Associate Product Manager",
    location: "Gurgaon, India",
    period: "January 2022 – June 2023",
    color: "bg-amber-50 border-amber-200",
    icon: <Database className="w-5 h-5 text-amber-600" />,
    summary: "At Think Talent Services, a talent intelligence SaaS company, I led multiple product innovations focused on enterprise assessments, skill diagnostics, and pricing optimization. I worked closely with sales, marketing, and engineering teams to build scalable B2B solutions and drive strategic growth via customer research and data-backed decisions.",
    achievements: [
      "Customizable Digital Assessment Tool: Launched a fully customizable, modular assessment engine that allowed clients to configure tests aligned with their competencies. This innovation improved user engagement by 14% and enhanced usability scores by 13%.",
      "AI-Powered Skill Gap Analysis: Partnered with the data science team to roll out a machine learning tool that analyzed skill data and mapped gaps against role requirements. Reduced assessment time by 20%, improved accuracy by 10%, and directly helped clients optimize hiring decisions and upskilling roadmaps.",
      "SaaS Pricing Strategy Overhaul: Led a pricing audit and competitor benchmarking initiative that culminated in a revamped pricing model based on customer size, usage, and ROI. This strategic change resulted in a 30% increase in average contract value and a 5% rise in LTV.",
      "Strategic Market Research: Conducted primary and secondary research to understand enterprise pain points in talent development. Influenced product positioning and roadmaps—contributing to an 11% gain in market share and 16% increase in CSAT."
    ],
    tools: {
      "Market Research & Analysis": ["Google Sheets", "SurveyMonkey", "Miro"],
      "Design & Prototyping": ["Lucidchart", "Figma", "Whimsical"],
      "Product Analytics": ["Tableau", "Looker"],
      "Documentation & PM Tools": ["Notion", "JIRA"],
      "Customer Feedback": ["Hotjar", "Zendesk"]
    }
  }
];

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Experience
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            My journey as a product manager across different industries, 
            building impactful solutions and driving meaningful outcomes.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="group"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg ${exp.color}`}>
                  {exp.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {exp.company}
                  </h2>
                  <p className="text-lg text-gray-700 font-light">{exp.role}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-10">
                <p className="text-gray-600 leading-relaxed font-light">
                  {exp.summary}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-10">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Key Achievements</h3>
                <div className="space-y-6">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Tools & Technologies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(exp.tools).map(([category, tools]) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-md border border-gray-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-gray-100 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Interested in discussing product strategy, user experience, or digital transformation? 
            I'd love to hear from you.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white font-normal px-8 py-3 rounded-md" 
            asChild
          >
            <a href="mailto:akshatsid36@gmail.com?subject=Let's Work Together">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
