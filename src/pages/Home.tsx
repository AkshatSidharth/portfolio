
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Product Manager <span className="text-medium-grey">with a passion for solving problems</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-dark-grey/80 max-w-2xl">
                I'm a product manager specializing in user-centric digital experiences. 
                With a background in design thinking and agile methodologies, I help teams 
                build products that users love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/files/resume.pdf" size="lg">Download Resume</Button>
                <Button href="/experience" variant="outline" size="lg">View Experience</Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="bg-light-grey rounded-full h-64 w-64 md:h-80 md:w-80 flex items-center justify-center">
                {/* Replace with an actual image */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-24 h-24 text-medium-grey">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light-grey py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold">3+</h3>
              <p className="text-medium-grey">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
              <p className="text-medium-grey">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold">5+</h3>
              <p className="text-medium-grey">Case Studies</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold">2+</h3>
              <p className="text-medium-grey">Freelance Gigs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skill Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="mx-auto mb-4 bg-light-grey rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Strategy</h3>
              <p className="text-dark-grey/80">
                Market research, competitive analysis, roadmap planning and vision development.
              </p>
            </div>
            <div className="card text-center">
              <div className="mx-auto mb-4 bg-light-grey rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">User-Centered</h3>
              <p className="text-dark-grey/80">
                User personas, journey mapping, usability testing, and customer interviews.
              </p>
            </div>
            <div className="card text-center">
              <div className="mx-auto mb-4 bg-light-grey rounded-full w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Data-Driven</h3>
              <p className="text-dark-grey/80">
                Analytics, A/B testing, metrics definition and reporting, KPI tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/experience" className="card hover:bg-light-grey/20">
              <h3 className="text-xl font-medium mb-3">Work Experience</h3>
              <p className="text-dark-grey/80 mb-4">
                Discover my journey through various product management roles and the impact I've made.
              </p>
              <span className="inline-flex items-center text-dark-grey font-medium">
                View Experience
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/case-studies" className="card hover:bg-light-grey/20">
              <h3 className="text-xl font-medium mb-3">Case Studies</h3>
              <p className="text-dark-grey/80 mb-4">
                Dive deep into selected projects with detailed processes, challenges and outcomes.
              </p>
              <span className="inline-flex items-center text-dark-grey font-medium">
                View Case Studies
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/projects" className="card hover:bg-light-grey/20">
              <h3 className="text-xl font-medium mb-3">Projects</h3>
              <p className="text-dark-grey/80 mb-4">
                Explore the diverse range of projects I've worked on throughout my career.
              </p>
              <span className="inline-flex items-center text-dark-grey font-medium">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-light-grey py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-dark-grey/80 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or hiring a product manager who's 
            passionate about creating impactful digital experiences?
          </p>
          <Button size="lg" href="mailto:contact@pmportfolio.com">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
