import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Centered Glassy Box (like Experience section) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white/10 backdrop-blur-2xl border-[3px] border-cyan-400/40 rounded-3xl p-10 md:p-16 shadow-[0_0_100px_#06b6d4]/40"
      >
        {/* Left Side - Circular Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-[4px] border-cyan-400/70 shadow-[0_0_70px_#06b6d4]/50 bg-white/10">
            <img
              src="./hanama.png"
              alt="Hanamagouda Patil"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Name + Role + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2"
        >
          <h1 className="text-6xl md:text-4xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
            Hanamagouda Patil
          </h1>
          <h2 className="text-3xl md:text-2xl text-gray-200 font-light mb-10">
            Software Engineer
          </h2>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-10">
            <a
              href="https://www.linkedin.com/in/hanamagoud-patil-897033148/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 border border-cyan-400/40 hover:bg-cyan-400/30 hover:scale-110 transition"
              title="LinkedIn"
            >
              <Linkedin size={42} />
            </a>

            <a
              href="https://github.com/hanamagouda9611"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 border border-cyan-400/40 hover:bg-cyan-400/30 hover:scale-110 transition"
              title="GitHub"
            >
              <Github size={42} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
