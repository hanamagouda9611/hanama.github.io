export default function Navbar() {
  const sections = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Certifications",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-cyan-400/30 flex items-center justify-between px-12 py-4 text-white shadow-lg shadow-cyan-500/20 z-50">
    
      {/* left Nav Links */}
      <div className="flex items-center gap-8">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-cyan-300 text-lg transition"
          >
            {item}
          </a>
        ))}

        {/* Resume Button with Google Drive link */}
        <a
          href="https://drive.google.com/file/d/1rFR1ZFf0cZYgGayBWaQIirGaOJspZYBP/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold shadow-md shadow-cyan-500/20"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
