export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      <h2 className="text-5xl font-bold text-cyan-400 mb-12 drop-shadow-lg">About Me</h2>

      <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
        <p className="text-gray-200 leading-relaxed text-xl md:text-2xl">
          I am a passionate{" "}
          <span className="text-cyan-400 font-semibold">Software Engineer</span>{" "}
          with nearly <span className="text-cyan-400 font-semibold">3 years </span> 
           of experience in designing and developing full-stack applications, spatial GIS 
          solutions, and cloud infrastructures.
        </p>

        <p className="text-gray-200 leading-relaxed text-xl md:text-2xl mt-8">
          I specialize in building scalable systems using modern frameworks, crafting elegant UI/UX, 
          and integrating cloud-native tools like{" "}
          <span className="text-cyan-400 font-semibold">AWS, Docker, and Kubernetes</span>. 
          My goal is to bridge the gap between technology, data, and human experience through innovation.
        </p>
      </div>
    </section>
  );
}
