import ProjectCard from "./ProjectCard";

// Temporary placeholder image
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with React, Tailwind CSS and Framer Motion.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "#",
    demo: "#",
    featured: true,
  },
];


function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#090913] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Some projects I've built using React, Tailwind CSS and modern web technologies.
        </p>

      <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500"></div> 

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-20">

  {projects.map((project) => (

    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      tech={project.tech}
      image={project.image}
      github={project.github}
      demo={project.demo}
      featured={project.featured}/>
    ))}

</div>

    </section>
  );
}

export default Projects;