import ProjectCard from "./ProjectCard";
import { useState, useEffect, useRef } from "react";
import portfolioImg from "../assets/portfolio.png";
import { motion } from "framer-motion";
 
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio featuring smooth animations, reusable React components, and modern UI design built with Tailwind CSS and Framer Motion.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/mohitjoshi-dev/portfolio",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather forecasting application using a weather API with a clean and responsive UI.",
    image: portfolioImg,
    tech: ["React", "API", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },

  {
    id: 3,
    title: "AI Stock Dashboard",
    description:
      "Interactive stock dashboard with charts, watchlists, and AI-powered market insights.",
    image: portfolioImg,
    tech: ["React", "Chart.js", "API"],
    github: "#",
    demo: "#",
    featured: false,
  },

  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Track daily expenses with charts, filters, and monthly summaries.",
    image: portfolioImg,
    tech: ["React", "LocalStorage", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },
];


function Projects() {
         
        const scrollRef = useRef(null);

        const scrollLeft = () => {
          scrollRef.current?.scrollBy({
            left: -500,
            behavior: "smooth",
          });
        };

        const scrollRight = () => {
          scrollRef.current?.scrollBy({
            left: 500,
            behavior: "smooth",
          });
        };


  return (
    <section
      id="projects"
      className="min-h-screen bg-[#090913] text-white pt-36 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Some projects I've built using React, Tailwind CSS and modern web technologies.
        </p>

      <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500"></div> 

      <div className="relative mt-10 mb-16">
      <div className="h-px bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="absolute inset-0 blur-md bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      </div>
    
<div className="relative mt-16 overflow-hidden">  
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30
                  h-12 w-12 rounded-full
                  bg-[#171727]/90
                  border border-purple-500/30
                  hover:bg-purple-600
                  transition-all duration-300"
      >
        ←
      </button>

      <motion.div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent"
      > 
       {projects.map((project) => (
      <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
            github={project.github}
            demo={project.demo}
            featured={project.featured}  />
    ))}
     
      </motion.div>

              {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30
                  h-12 w-12 rounded-full
                  bg-[#171727]/90
                  border border-purple-500/30
                  hover:bg-purple-600
                  transition-all duration-300"
      >
        →
      </button>

       </div>
      </section>
  );
}

export default Projects;