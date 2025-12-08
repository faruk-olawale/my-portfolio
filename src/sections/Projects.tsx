import darkSaasLandingPage from "@/assets/images/Geegstack.png";
import lightSaasLandingPage from "@/assets/images/movie.png";
import aiStartupLandingPage from "@/assets/images/JobListing.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Geegstack Academy",
    year: "2022",
    title: "Geegstack LMS Portal",
    results: [
      { title: "Improved course navigation with clean UI/UX design" },
      { title: "Boosted user retention with personalized learning paths" },
      { title:"Reduced page load time by 45% (from 3.2s to 1.8s)" },
    ],
    liveDemo: "https://geegstack-six.vercel.app/",
    github: "https://github.com/faruk-olawale/Geegstack",
    image: darkSaasLandingPage,
    techStack: [ "React", "Tailwind CSS" ],
  },
  {
    company: "FarukCinema",
    year: "2025",
    title: "Movie App",
    results: [
      { title: "Integrated real-time movie trailers using external APIs" },
      { title: "Built a favorites section with persistent user data" },
      { title: "Displayed detailed movie info including genres and cast" },
    ],
    liveDemo: "https://movie-app-nu-umber.vercel.app/",
    github: "https://github.com/faruk-olawale/movieAPP",
    image: lightSaasLandingPage,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    company: "Job Listing Platform",
    year: "2025",
    title: "JobListing web app",
    results: [
      { title: "Implemented job filtering by location, role, and company" },
      { title: "Improved user trust by showing active job openings only" },
      { title: "Improved search accuracy with keyword-based matching" },
    ],
    liveDemo: "https://static-job-listing-cxmt.vercel.app/",
    github: "https://github.com/faruk-olawale/static-job-listing",
    image: aiStartupLandingPage,
    techStack: ["React", "API", "Tailwind CSS"],
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container max-w-5xl mx-auto px-4"> 
        <SectionHeader 
          eyebrow="Real-World Results" 
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
   
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                
                <div className="lg:pb-16">
                  
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400
                    inline-flex gap-2 font-bold uppercase tracking-widest
                    text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span> 
                  </div> 
          
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-emerald-300/10 
                        text-emerald-300 rounded-full border border-emerald-300/20 
                        font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
          
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

             <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2 whitespace-nowrap">
                <span>Live Demo</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <button className="border border-white/20 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2 whitespace-nowrap">
                <span>GitHub</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>

                </div>

                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0
                      lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>  
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
