import avatar from "../assets/Avatar.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#090B17] py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-purple-400 uppercase tracking-[0.2em] text-sm font-medium">
            Get To Know Me
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
        <div className="flex justify-center">

    <div className=" relative">
        <div className="absolute inset=0 rounded-full bg-purple-600 blur-3xl opacity-20"></div>
        </div>        
    
    <div className="relative">
  {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-20"></div>

    {/* Avatar */}
    <div
        className="
        relative
        w-80
        h-80
        rounded-full
        overflow-hidden
        border-4
        border-purple-500
        shadow-[0_0_40px_rgba(168,85,247,0.35)]
        "
    >
        <img
        src={avatar}
        alt="Mohit Avatar"
        className="w-full h-full object-cover"
        />
    </div>
    </div>


    </div>  
        <div>
        <span className="text-purple-400 uppercase tracking-[0.2em] text-sm font-medium">
            Frontend Developer
        </span>

        <h3 className="text-5xl font-bold text-white mt-4">
            Passionate About
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
            {" "}Building
            </span>
        </h3>

        <p className="mt-8 text-gray-400 leading-8 text-xl">
            I'm a B.Tech Computer Science student passionate about frontend
            development. I enjoy creating responsive and modern web applications
            using React and Tailwind CSS.

            <br /><br />

            My goal is to build beautiful, user-friendly interfaces while
            continuously improving my skills through real-world projects.
        </p>
    </div>
             
    </div>

    </div>
    </section>
  );
}