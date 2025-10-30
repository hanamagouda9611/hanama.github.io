const skills = {
  "Programming & APIs": ["Python", "FastAPI", "RESTful APIs"],
  "Web Development": ["HTML", "CSS", "JavaScript", "Leaflet.js", "Mapbox GL JS","React" ],
  "Databases": ["PostgreSQL", "PostGIS", "Oracle SQL"],
  "Cloud & DevOps": ["AWS","Docker", "Kubernetes", "Terraform", "Ansible" ],
  "ETL & GIS Tools": ["GeoServer", "QGIS", "GeoPandas", "GDAL", "FME"],
};

export default function Skills() {
  return (
     <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-accent mb-10">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-accent mb-3">{category}</h3>
            <ul className="text-gray-300 list-disc list-inside">
              {list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
