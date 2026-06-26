import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/mohitjoshi-dev",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    icon: FaEnvelope,
    href: "mailto:mohitjoshi1357@gmail.com",
  },
];

  return (
    <>

    <section className="relative overflow-hidden min-h-screen bg-[#090913] flex flex-col justify-center items-center text-white"> 
    
    <div className=" absolute -top-30 -left-30 w-112.5 h-112.5 rounded-full bg-purple-700/20 blur-[140px] pointer-events-none"></div>
    <div className=" absolute -bottom-30 -right-30 w-112.5 h-112.5 rounded-full bg-purple-700/20 blur-[140px] pointer-events-none"></div>
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-125 rounded-full bg-fuchsia-500/8 blur-[200px] pointer-events-none"></div>

    <div className="relative z-10"></div>
    
    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm mb-6">
      <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
      Available for Internships
    </div>


    <p className="text-purple-400 text-3xl font-medium mb-4">
  👋 Hello, I'm
    </p>


    <div className="relative inline-block overflow-hidden">
      <h1 className="hero-title text-7xl font-extrabold tracking-tight mb-3">
           Mohit Joshi
      </h1>
    </div>
    <div className="mb-8 text-center">

   <h2 className="text-3xl font-semibold text-purple-500 mb-5">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "UI Enthusiast",
      2000,
      "Frontend Developer",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
  </h2>

    <p className="mt-3 text-lg text-gray-300 max-w-2xl leading-relaxed">
      Crafting fast, responsive web experiences with
      React, Tailwind CSS & JavaScript.
    </p>

    </div>

    <p className="text-xl text-gray-400 text-center max-w-2x1 mb-8">
        Building modern web applications with React, Tailwind CSS and
        JavaScript while preparing for software internships.
    </p>

  <div className="flex gap-6">
  <button className="bg-linear-to-r from-purple-600 to-fuchsia-500 px-8 py-4 font-semibold rounded-lg cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-purple-500/40 hover:shadow-2xl transition-all duration-300">
    View Projects
  </button>

  <button className="border border-purple-500 px-8 py-4 font-semibold rounded-lg cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300">
    Download Resume
  </button>
</div>
<div className="flex items-center gap-6 mt-10">
  {socials.map((social, index) => {
    const Icon = social.icon;

    return (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className=" w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-purple-500/10 
        hover:border-purple-400/30 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 "
      >
        <Icon size={24} />
      </a>
    );
  })}
</div>

    <nav className="fixed top-1 left-1/2 -translate-x-1/2 z-50 max-w-3x1 flex items-center justify-between px-8 py-2 rounded-full
                 bg-gray-800/70  backdrop-blur-xl border  border-purple-500/20  shadow-2xl" >

      

      <div className="flex gap-5">
      <a href="#about" className=" px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-500">
        About
      </a>        
      <a href="#skills" className="px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-500">
        Skills
      </a>  
      <a href="#projects" className="px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-500">
        Projects
      </a>        
      <a href="#contact" className="px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-500">
        Contact
      </a>               
    </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
      className="px-3 py-4 rounded-full bg-linear-to-r from-purple-60 to-fuchsia-500 font-medium text-white hover:scale-105
      hover:shadow-1g hover:shadow-violet-500/30 transition-all duration-300 ease-out ml-4"> Resume ↗ </a>

  </nav>
</section>


  <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-extrabold tracking-tight mb-6 ">
        About Me
      </h2>

      <p className="text-lg text-gray-500 max-w-3xl text-center">
        I am a B.Tech student who is currently in 3rd year pursuing Computer Science and I am passionate about frontend development,
        React, Tailwind CSS and building projects that solve real-world
        problems.
        I till now have not made that much of a Project but will make sure to make them sooner
        
      </p>
  </section>

</>


  );
}

export default Introduction;
