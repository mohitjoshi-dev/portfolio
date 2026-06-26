import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ title, description, tech, image, github, demo, featured = false,}) {
  return (
    <div
      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-purple-500/20
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-purple-400/40
      hover:shadow-[0_20px_60px_rgba(168,85,247,.25)]
      ${featured ? "md:col-span-2" : ""}
      `}
    >

      {/* Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-purple-500/10 via-fuchsia-500/5 to-transparent"></div>

      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-50 w-full object-cover transition duration-700 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="relative p-7">

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-7 mb-4">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mb-8">

          {tech.map((item) => (

            <span
              key={item}
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
            >
              {item}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-500 px-5 py-3 font-medium transition hover:scale-105"
          >
            Live Demo
            <FiExternalLink />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 px-5 py-3 transition hover:bg-purple-500/10"
          >
            GitHub
            <FaGithub />
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;