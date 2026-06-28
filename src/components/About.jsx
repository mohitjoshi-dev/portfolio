import avatar from "../assets/Avatar.png";

import { FaCode, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGithub } from "react-icons/fa";

import { SiJavascript, SiTailwindcss, SiMysql, SiCplusplus } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

function About() {

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

const skills = [
        {
          name: "HTML",
          icon: FaHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS",
          icon: FaCss3Alt,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "React",
          icon: FaReact,
          color: "#61DAFB",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#38BDF8",
        },
        {
          name: "Java",
          icon: FaJava,
          color: "#EA2D2E",
        },
        {
          name: "Python",
          icon: FaPython,
          color: "#3776AB",
        },
        {
          name: "C++",
          icon: SiCplusplus,
          color: "#00599C",
        },
        {
          name: "MySQL",
          icon: SiMysql,
          color: "#4479A1",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "#FFFFFF",
        },
      ];  

  return (
    <section
      id="about"
      className="relative bg-[#05050F] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-purple-400 uppercase tracking-[0.25em] text-sm">
            GET TO KNOW ME
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-5">
            About{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

        </div>


  {/* Main Content */}

    <div className="grid lg:grid-cols-2 gap-28 items-center">

      {/* LEFT */}

      <div className="flex justify-center lg:mt-10">

        <div className="relative float-slow">

          {/* Floating Circles */}

        <div className="absolute -top-14 left-6 w-12 h-12 rounded-full border-2 border-purple-500/70"></div>

        <div className="absolute top-2 -right-8 w-8 h-8 rounded-full border-2 border-purple-400"></div>

        <div className="absolute bottom-12 -left-12 w-6 h-6 rounded-full border-2 border-purple-400"></div>

        <div className="absolute bottom-0 -right-14 w-16 h-16 rounded-full border-2 border-purple-500/60"></div>

        {/* <div className="absolute top-28 -left-20 w-3 h-3 bg-purple-400 rounded-full"></div>

        <div className="absolute top-20 -right-13.75 w-2 h-2 bg-pink-400 rounded-full"></div>

        <div className="absolute bottom-28 -right-8.75 w-4 h-4 bg-purple-500 rounded-full"></div>

        <div className="absolute bottom-10 -left-17.5 w-3 h-3 bg-purple-300 rounded-full"></div>

        <div className="absolute -inset-1 rounded-full border border-dashed border-purple-500/30" /> */}

        <div className="absolute inset-0 glow-pulse rounded-full bg-purple-500/30 blur-[70px] scale-110"></div>
  
        {/* Orbit 1 */}

        <div className="orbit">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-purple-400"></div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-purple-500/70"></div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full"></div>

        </div>  


        {/* Orbit 2 */}

        <div className="orbit reverse">

        <div className="absolute top-8 right-12 w-2 h-2 bg-purple-400 rounded-full"></div>

        <div className="absolute bottom-12 left-8 w-3 h-3 bg-pink-500 rounded-full"></div>

        <div className="absolute top-24 left-0 w-10 h-10 rounded-full border border-dashed border-purple-500/50"></div>

        <div className="absolute bottom-0 right-16 w-6 h-6 rounded-full border border-purple-400"></div>

        </div>


        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-[70px] scale-110 glow-pulse" />    

           
          {/* Avatar */}
          
          <div className="relative w-87.5 h-87.5 rounded-full border-4 border-purple-500 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.35)]">

            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">

          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>

          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>

          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>

          </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

          <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  3000,
                  "",
                  500,
                ]}
                wrapper="p"
                speed={80}
                repeat={Infinity}
                className="text-purple-400 uppercase tracking-[0.2em] text-sm font-medium mb-4"
              />

        <h3 className="text-5xl font-bold text-white leading-tight mt-5">

          Passionate About

          <br />

          <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Building Modern
          </span>

          <br />

          <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web Experiences
          </span>

        </h3>

        <p className="text-gray-400 max-w-lg text-lg leading-9 mt-10">

          I'm a B.Tech Computer Science student passionate about frontend
          development. I enjoy building responsive and modern web
          applications using React and Tailwind CSS.

          <br /><br />

          My goal is to create clean, user-friendly interfaces while
          continuously improving my skills through real-world projects.

        </p>

            <div className="grid grid-cols-3 gap-5 mt-12">

      <div className="group rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-5 transition-all 
                        duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">

        <p className="text-4xl font-bold text-white">
            2
        <span className="text-purple-400">+</span>
        </p>

        <p className="text-gray-400 mt-2">
            Years Learning
        </p>

        </div>

        <div className="group rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">

        <p className="text-4xl font-bold text-white">
            4
        <span className="text-purple-400">+</span>
        </p>

          <p className="text-gray-400 mt-2">
            Projects
          </p>

        </div>

        <div className="group rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">

          <p className="text-4xl font-bold text-white">
            8<span className="text-purple-400">+</span>
          </p>

          <p className="text-gray-400 mt-2">
            Technologies
          </p>
          
        </div>

      </div>
         
      </div>

          <div className="mt-16 lg:col-span-2">

          <h3 className="text-center text-white text-3xl font-bold mb-10 tracking-wide">
            Tech Stack
          </h3>

        <div className="relative p-7 pb-10 rounded-4xl border border-purple-400/20 bg-linear-to-br from-white/6 to-white/2 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,.15)] flex items-center overflow-visible transition-all 
                duration-500 hover:border-purple-400/40 hover:shadow-[0_0_70px_rgba(168,85,247,.28)]">            
            
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent"></div>
           {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-purple-500/20 hover:border-purple-400">
                     <FiChevronLeft size={20} /> 
          </button>

         
          <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide py-6 px-14 w-full">
              <div className="flex w-max gap-4 px-2">

                {skills.map((skill, index) => {
  const Icon = skill.icon;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.8,
      }}
      className="flex flex-col items-center justify-center shrink-0 group w-25 h-30 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(168,85,247,.25)]"
    >
      <Icon
        size={40}
        style={{ color: skill.color }}
        className="mb-3 transition-all duration-300 group-hover:scale-110"
      />

      <span className="text-gray-300 text-xs font-medium tracking-wide">
        {skill.name}
      </span>

      <div
        className="mt-3 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-10"
        style={{
          backgroundColor: skill.color,
          boxShadow: `0 0 10px ${skill.color}`,
        }}
      />
    </motion.div>
  );
})}

         </div> 
          
        </div>
               <button
                  onClick={scrollRight}
                  className="absolute right-4 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-purple-500/20 hover:border-purple-400">
                    <FiChevronRight size={20} />
                </button>
          
</div>
          
</div>

    </div>


    </div>
    
    </section>
  );
}

export default About;