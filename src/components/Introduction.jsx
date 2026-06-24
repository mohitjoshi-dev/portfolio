function Introduction() {
  return (
    <>
    <section className="min-h-screen bg-gray-950 flex flex-col justify-center items-center text-white">
  
    <h1 className="text-7xl font-bold mb-6"> 
    Mohit Joshi
    </h1>

    <h2 className="text-2xl  text-purple-500 font-semibold mb-6">
    A Simple Frontend Devoloper | Tech Enthusiast | Eager Learner
    </h2>

    <p className="text-xl text-gray-400 text-center max-w-2x1 mb-8">
        Building modern web applications with React, Tailwind CSS and
        JavaScript while preparing for software internships.
    </p>

  <div className="flex gap-6">
  <button className="bg-purple-600 px-6 py-3 rounded-lg">
    View Projects
  </button>

  <button className="border border-purple-500 px-6 py-3 rounded-lg">
    Download Resume
  </button>
</div>


    <nav className="absolute top-0 w-full flex justify-between p-6">
      <h1 className="text-xl font-bold">Mohit</h1>

      <div className="flex gap-6">
      <a href="#about" className="hover:text-purple-500">
        About
      </a>        
      <a href="#skills" className="hover:text-purple-500">
        Skills
      </a>  
      <a href="#projects" className="hover:text-purple-500">
        Projects
      </a>        
      <a href="#contact" className="hover:text-purple-500">
        Contact
      </a>        
            
      </div>
  </nav>
</section>


  <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-lg text-gray-300 max-w-3xl text-center">
        I am a B.Tech student passionate about frontend development,
        React, Tailwind CSS and building projects that solve real-world
        problems.
        
      </p>
  </section>

</>


  );
}

export default Introduction;
