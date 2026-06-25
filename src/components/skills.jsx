import { FaCode, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGithub } from "react-icons/fa";

import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      
      className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center"    >
        <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold">
           Skills
        </h2>

      <div className="w-32 h-1 bg-linear-to-br from-gray-900 to-purple-950 mx-auto mt-3 rounded-full"></div>
    </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center cursor-pointer justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl transition-all duration-500">

        <FaHtml5 className="text-5xl text-orange-500 mb-3" />

        <h3 className="text-xl font-semibold">
            HTML
        </h3>

        </div>  

        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover: shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <FaCss3Alt className="text-5xl text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold">
                CSS
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <FaJava className="text-5xl text-red-500 mb-3" />  
            <h3 className="text-xl font-semibold">
                JAVA
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <SiJavascript className="text-5xl text-yellow-400 mb-3" />   
            <h3 className="text-xl font-semibold">
                JAVASCRIPT
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">
        <FaPython className="text-5xl text-yellow-500 mb-3" />  
            <h3 className="text-xl font-semibold">
                PYTHON
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <FaReact className="text-5xl text-cyan-400 mb-3" />   
            <h3 className="text-xl font-semibold">
                REACT
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <FaCode className="text-5xl text-blue-400 mb-3" />  
            <h3 className="text-xl font-semibold">
                C
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

        <SiMysql className="text-5xl text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold">
                MySQL
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">

         <SiTailwindcss className="text-5xl text-cyan-400 mb-3" />
            <h3 className="text-xl font-semibold">
                Tailwind CSS
            </h3>

        </div>  
        <div className="bg-linear-to-br from-gray-900 to-purple-950 w-46 h-30 rounded-xl flex flex-col items-center className= col-start-2 justify-center hover:scale-110 hover:shadow-purple-500 hover:shadow-2xl cursor-pointer transition-all duration-500">
              
         <FaGithub className="text-5xl text-white mb-3" />
            <h3 className="text-xl font-semibold">
                GitHub
            </h3>

        </div>  
      
      
      
      
      
      
      </div>
    </section>
  );
}

export default Skills;