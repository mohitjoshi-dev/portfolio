import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background glow — matches hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-purple-400 text-3xl font-semibold tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              together
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-xl font-semibold">
            Have an opportunity, project, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="grid md:grid-cols-2 gap-10 bg-white/3 border border-purple-500/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">

          {/* Left: direct contact info */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-5">Contact details</h3>

            <a
              href="mailto:mohit@example.com"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors mb-4 group"
            >
              <span className="w-9 h-9 rounded-full border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 transition-colors">
                <FaEnvelope className="text-purple-400 text-base" />
              </span>
              mohitjoshi1357@gmail.com
            </a>

            <div className="flex items-center gap-3 text-gray-300 mb-4">
              <span className="w-9 h-9 rounded-full border border-purple-500/30 flex items-center justify-center">
                <FaMapMarkerAlt className="text-purple-400 text-base" />
              </span>
              Based in India, open to remote
            </div>

            <div className="flex items-center gap-3 text-gray-500 mb-8">
              <span className="w-9 h-9 rounded-full border border-purple-500/30 flex items-center justify-center">
                <FaClock size={16} className="text-purple-400" />
              </span>
              Usually responds within 24 hours
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/mohitjoshi-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
               className=" w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-purple-500/10 
                        hover:border-purple-400/30 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 "
      >
                <FaGithub className="text-lg" /> 
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className=" w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-purple-500/10 
                        hover:border-purple-400/30 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 "
      >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:mohitjoshi1357.com"
                aria-label="Email"
                className=" w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-purple-500/10 
                        hover:border-purple-400/30 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 "
      >
              <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:border-l border-t md:border-t-0 border-purple-500/20 md:pl-10 pt-8 md:pt-0">
            <h3 className="text-white font-semibold text-lg mb-5">Send a message</h3>

            {/* Wire this up with Formspree, EmailJS, or Web3Forms — see note below */}
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="bg-black/40 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-black/40 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <textarea
                name="message"
                placeholder="What's on your mind?"
                rows={4}
                className="bg-black/40 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="mt-1 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                Send message
                <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
