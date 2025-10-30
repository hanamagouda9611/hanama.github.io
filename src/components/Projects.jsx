const projects = [
  {
    title: "IMARG MAP – Cloud GIS Web App",
    desc: "A scalable cloud-based GIS platform using React, GeoServer, PostGIS, AWS, and Kubernetes.",
  },
  {
    title: "ENC MAP – Marine Navigation Tool",
    desc: "Developed compliant marine navigation charts using GeoServer and S-57 datasets.",
  },
  {
    title: "Geocoding API",
    desc: "Location-based API using FastAPI, Elasticsearch, and PostGIS for geospatial search.",
  },
  {
    title: "ETL Pipeline for Spatial Data",
    desc: "Automated Python ETL for spatial data ingestion with GeoPandas and GDAL.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-accent mb-10">Projects</h2>
      <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
