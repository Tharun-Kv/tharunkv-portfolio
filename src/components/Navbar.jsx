export default function Navbar() {
  const links = ["Home", "About", "Experience", "Projects", "Skills", "Certificates", "Education", "Leadership", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950/50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        <h1 className="text-2xl font-extrabold tracking-wide text-cyan-300">Tharun K V</h1>
        <ul className="hidden md:flex space-x-8 text-gray-200">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
