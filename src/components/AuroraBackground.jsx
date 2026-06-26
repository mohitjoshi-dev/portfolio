import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-50 -left-37.5 w-137.5 h-137.5
        rounded-full bg-fuchsia-500/20 blur-[140px]"
      />

      {/* Violet Blob */}
      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-55 -right-45 w-162.5 h-162.5
        rounded-full bg-violet-500/20 blur-[170px]"
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -50, 90, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/3 w-112.5 h-112.5
        rounded-full bg-blue-500/10 blur-[140px]"
      />
  

       
        {/* Beam */}
        <motion.div
        animate={{
            rotate: [0, 6, -6, 0],
            opacity: [0.15, 0.35, 0.2, 0.15],
        }}
        transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-225 h-175 
                    bg-linear-to-b from-fuchsia-400/20 via-purple-500/5 to-transparent blur-[130px]" 
        />

    <div
        className=" absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]"/>






     </div>
  );
}
export default AuroraBackground;