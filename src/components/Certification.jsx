export default function Certifications() {
  return (
      <section
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-accent mb-10">Certifications</h2>
      <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
      <div className="max-w-4xl mx-auto space-y-4 text-gray-300">
        <ul className="list-disc list-inside">
          <li>Java Full Stack – JSpiders</li>
          <li>JavaScript – Namaste JavaScript</li>
          <li>FastAPI, AWS Cloud, DevOps, GeoServer, GeoPandas – Udemy</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
