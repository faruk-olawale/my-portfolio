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
     { title: "Reduced page load time by optimizing resource loading" },
    ],
    link: "https://geegstack-six.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "FarukCinema",
    year: "2025",
    title: "Movie App",
    results: [
     { title: "Integrated real-time movie trailers using external APIs" },
    { title: "Built a favorites section with persistent user data" },
    { title: "Displayed detailed movie info including genres, ratings, and cast" },
    ],
    link: "https://movie-app-nu-umber.vercel.app/",
    image: lightSaasLandingPage,
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
    link: "https://static-job-listing-cxmt.vercel.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return(  
    <section className="pb-16 lg:py-24">
    <div className="container max-w-5xl mx-auto px-4"> 
     <SectionHeader eyebrow=" Real-World Results" title="Featured Projects"
      description=" see how I transformed concepts into engaging digital experiences."/>
   
    <div className="mt-10 md:mt-20 flex flex-col gap-20">
      {portfolioProjects.map((project, projectIndex) => (
        <Card
         key={project.title}
          className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
          style={{
            top:`calc(64px + ${projectIndex *40}px`,
          }}
        >
            <div className="lg:grid lg:grid-cols-2
             lg:gap-16">
            <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400
            inline-flex gap-2 font-bold uppercase tracking-widest
             text-sm text-transparent bg-clip-text">
            <span>{project.company}</span>
            <span>&bull;</span>
            <span>{project.year}</span> 
            </div> 
          
          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map((result,i) => (
              <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckIcon className="size-5 md:size-6"/>
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <a href={project.link}>
          <button className="bg-white text-gray-950 h-12 w-full md:w-auto
          px-6 rounded-xl font-semibold inline-flex items-center justify-center 
          gap-2 mt-8
          ">
            <span>Visit Live Site</span>
            <ArrowUpRightIcon className="size-4"/>
            </button>
          </a>
          </div>
          <div className="relative">
          <Image src={project.image} alt={project.title} 
          className="mt-8 -mb-4 
             md:-mb-0 lg:mt-0
             lg:absolute lg:h-full
             lg:w-auto lg:max-w-none"
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
