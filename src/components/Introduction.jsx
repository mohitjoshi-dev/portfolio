import { FaGithub, FaLinkedin, FaEnvelope,  } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FaHouse } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import AuroraBackground from "./AuroraBackground";
import { motion } from "framer-motion";


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

    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>

    <section 
      id="home"
      className="relative overflow-hidden min-h-screen bg-[#090913] flex flex-col items-center text-white pt-12">
      <AuroraBackground />       

    <div className=" absolute -top-30 -left-30 w-112.5 h-112.5 rounded-full bg-purple-700/20 blur-[140px] pointer-events-none"></div>
    <div className=" absolute -bottom-30 -right-30 w-112.5 h-112.5 rounded-full bg-purple-700/20 blur-[140px] pointer-events-none"></div>
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-125 rounded-full bg-fuchsia-500/8 blur-[200px] pointer-events-none"></div>

    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut",}}>


    <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm mb-6">
      <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
      Available for Internships
    </div>

    </motion.div>        

    
    <p className="text-purple-400 text-3xl font-medium mb-4 ">
  👋 Hello, I'm
    </p>
    
    <div className="relative inline-block overflow-hidden">
      <motion.h1 
      style={{backgroundSize: "200% 200%",}}
      initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
      
      className="hero-title text-7xl font-extrabold tracking-tight mb-3 bg-linear-to-r from white via-purple-300 to to-fuchsia-400
                 bg-clip-text text-transparent animate-gradient">
      
           Mohit Joshi
      </motion.h1>
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
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      
      className="mb-9 max-w-3xl mx-auto text-center text-lg md:text-xl leading-9 text-gray-300 font-normal"
    >
      Crafting sleek, responsive web experiences with{" "}
      <span className="font-semibold text-white">
        React
      </span>{" "}
      and{" "}
      <span className="font-semibold text-purple-300">
        Tailwind CSS
      </span>.
      <br />
      Passionate about building modern interfaces and continuously learning to become a better software engineer.
  </motion.p>

  <div className="flex gap-6">
  <button
  onClick={() => scrollToSection("projects")}
  className="px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-500 font-semibold text-white hover:scale-105 
  hover:shadow-[0_0_30px_rgba(168,85,247,.45)] transition-all duration-300">
     View Projects
  </button>

  <a
  href="/resume.pdf"
  download
  className="px-8 py-4 rounded-xl border border-purple-500 text-white font-semibold hover:bg-purple-500/10 hover:scale-105 
             hover:shadow-[0_0_25px_rgba(168,85,247,.35)] transition-all duration-300">
      Download Resume
  </a>

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


<nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 max-w-3xl flex items-center justify-between px-8 py-4 rounded-full
              bg-[#101827]/75 backdrop-blur-2xl border border-purple-500/20 shadow-[0_10px_40px_rgba(139,92,246,0.15)]">

      
      <div className="flex items-center gap-3">
       

    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("home");
    }}
        
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-purple-500/30 bg-linear-to-br from-[#2b2346] via-[#1c2235] to-[#111827]
              hover:border-fuchsia-400 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(217,70,239,.45)] transition-all duration-300"
>
   <HiHome
        size={22}
        className="text-white group-hover:text-fuchsia-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,.35)]
                     group-hover:drop-shadow-[0_0_16px_rgba(217,70,239,.8)]"
        />

    <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-linear-to-br
                   from-purple-500/20 via-pink-500/10 to-transparent transition duration-300" />   
        
    <span className="absolute -bottom-4 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#d946ef] opacity-0 scale-0 group-hover:scale-100 
                     group-hover:opacity-100 transition-all duration-300" /></a>
       
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("about");
    }}    
      
      className=" group relative px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-1 transition-all duration-500">
        About
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-linear-to-br from-purple-400 to-pink-500 group-hover:w-3/4 
                       transition-all duration-300" />
      </a>        
     
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("skills");
        }}
             
      className="group relative px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-1 transition-all duration-500">
        Skills
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-linear-to-br from-purple-400 to-pink-500 group-hover:w-3/4 
                       transition-all duration-300" />
      </a>  
     
     
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("projects");
        }}
        
      className="group relative px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-1 transition-all duration-500">
        Projects
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-linear-to-br from-purple-400 to-pink-500 group-hover:w-3/4 
                       transition-all duration-300" />  
      </a>        
      
      
      <a  
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
      
      className="group relative px-4 py-2 rounded-full hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-1 transition-all duration-500">
        Contact
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-linear-to-br from-purple-400 to-pink-500 group-hover:w-3/4 
                       transition-all duration-300" />  
      </a>               
    
    </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
      className="px-3 py-4 rounded-full bg-linear-to-r from-purple-60 to-fuchsia-500 font-medium text-white hover:scale-105
      hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(217,70,239,.55)] transition-all duration-300 ease-out ml-4"> Resume ↗ </a>

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
