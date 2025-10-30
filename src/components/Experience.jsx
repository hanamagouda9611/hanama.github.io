export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      <h2 className="text-5xl font-bold text-cyan-400 mb-12 drop-shadow-lg">Experience</h2>

      <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Software Engineer – Deduce Technologies Pvt Ltd
        </h3>
        <p className="text-gray-400 text-lg mb-6">Jan 2023 – Present | Bangalore</p>

        <ul className="text-gray-200 text-left list-disc list-inside space-y-3 text-xl md:text-2xl">
          <li>Developed and managed scalable GIS-based applications and APIs.</li>
          <li>Automated AWS infrastructure provisioning using Terraform and Ansible.</li>
          <li>Built containerized services deployed via Kubernetes and Docker.</li>
          <li>Developed RESTful APIs using FastAPI and Node.js with PostGIS and GeoServer integrations.</li>
          <li>Implemented CI/CD pipelines using GitHub Actions and Jenkins for automated deployments.</li>
        </ul>
      </div>
    </section>
  );
}
