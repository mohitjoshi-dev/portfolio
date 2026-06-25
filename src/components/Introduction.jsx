function Introduction() {
  return (
    <>
    
    

    <section className="relative min-h-screen bg-gray-950 flex flex-col justify-center items-center text-white">

    <div className="absolute w-80 h-80 bg-purple-700 rounded-full blur-[150px] opacity-20 -top-20 -left-20"></div>

    <div className="absolute w-80 h-80 bg-purple-700 rounded-full blur-[150px] opacity-20 bottom-0 right-0"></div>

    <div className="relative z-10"></div>
    
    <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm mb-6">
      <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
      Available for Internships
    </div>


    <p className="text-purple-400 text-3xl font-medium mb-4">
  👋 Hello, I'm
    </p>


    <h1 className="text-7xl font-extrabold mb-6 tracking-wide drop-shadow-lg"> 
  
    Mohit Joshi
    </h1>

    <h2 className="text-2xl  text-purple-500 font-semibold mb-6">
      Frontend Developer
      Crafting fast, responsive web experiences
      with React & Tailwind CSS.
        </h2>

    <p className="text-xl text-gray-400 text-center max-w-2x1 mb-8">
        Building modern web applications with React, Tailwind CSS and
        JavaScript while preparing for software internships.
    </p>

  <div className="flex gap-6">
  <button className="bg-purple-600 px-6 py-3 rounded-lg cursor-pointer hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl transition-all duration-500">
    View Projects
  </button>

  <button className="border border-purple-500 px-6 py-3 rounded-lg cursor-pointer hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl transition-all duration-500">
    Download Resume
  </button>
</div>


    <nav className="fixed top-1 left-1/2 -translate-x-1/2 z-50 max-w-3x1 flex items-center justify-between px-8 py-3 rounded-full
                 bg-gray-800/70  backdrop-blur-xl border  border-purple-500/20  shadow-2xl" >

      

      <div className="flex gap-6">
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
