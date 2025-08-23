import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import client from "../../client.jsx";
import Loading from "@/components/custom/Loading";

function ProjectShowcase() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projectsPerPage = 4;

  const sectionRef = useRef(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] | order(publishedAt desc) {
            title,
            slug,
            url,
            body,
            mainImage {
              asset->{_id, url},
              alt
            },
            stacks[]->{
              title,
            },
            publishedAt
          }`
      )
      .then((data) => {
        setProjects(data);
        setCurrentPage(1);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchInput]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      // jika query kosong setelah user pernah search -> tampilkan kosong
      setFilteredProjects([]);
    } else {
      const filtered = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  // Scroll ke atas (bagian section) setiap kali halaman berubah
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="w-full bg-black py-12 px-6 flex flex-col items-center">
        <div className="w-full max-w-xl">
          <h2 className="text-white text-lg font-semibold mb-4 text-left">
            Find a project
          </h2>
          <div className="relative">
            <input
              type="text"
              aria-label="Search projects"
              placeholder="Search projects..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition-all duration-200 shadow-md"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>

        <div className="top-70 absolute max-w-xs md:max-w-3xl w-full mx-auto text-white space-y-4 bg-white z-10 rounded">
          {filteredProjects.slice(0, 4).map((project) => (
            <div
              key={project._id || project.slug?.current}
              className="flex flex-col p-4 bg-white border border-gray-200 shadow-md rounded-md hover:shadow-lg"
            >
              <a
                href={`/project/${project.slug?.current}`}
                className="text-lg font-semibold text-black hover:text-gray-700"
                aria-label={`View details for ${project.title}`}
              >
                {project.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={sectionRef}
        className="min-h-screen bg-black py-20 px-4 flex flex-col items-center text-white"
        role="region"
        aria-labelledby="projects-heading"
      >
        <header className="mb-16 text-center max-w-4xl" id="projects-heading">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white mb-4">
            My Creative Journey
          </h1>
          <p className="text-sm md:text-2xl text-gray-200 font-medium leading-relaxed">
            A showcase of my boldest ideas, crafted with <br /> modern tech and
            creative passion.
          </p>
        </header>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl w-full mx-auto">
          {currentProjects.map((project) => (
            <motion.article
              key={project._id || project.slug?.current}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-500 select-none"
            >
              <Link
                to={`/project/${project.slug?.current}`}
                className="group block focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700 active:scale-[0.98] transition duration-200 ease-in-out"
                aria-label={`View details for ${project.title}`}
              >
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={project.mainImage?.asset?.url || "/placeholder.jpg"}
                    alt={
                      project.mainImage?.alt || `Preview of ${project.title}`
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {project.body?.[0]?.children?.[0]?.text ??
                      "No description available."}
                  </p>

                  {/* Stacks */}
                  {project.stacks?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.stacks.map((tech) => (
                        <span
                          key={tech._key || tech.title}
                          className="text-xs bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded border border-gray-200 dark:border-neutral-700"
                        >
                          {tech.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>

              {/* CTA Button */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="mt-auto block w-full text-center bg-gradient-to-r from-black to-neutral-800 text-white font-medium py-3 rounded-b-2xl hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700"
                >
                  Explore Project
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
          {/* Previous */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition
      ${
        currentPage === 1
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/20"
      }
    `}
          >
            ←
          </button>

          {/* Numbered Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              aria-label={`Page ${num}`}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition
        ${
          num === currentPage
            ? "bg-white text-black shadow-md"
            : "bg-white/10 text-white hover:bg-white/20"
        }
      `}
            >
              {num}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition
      ${
        currentPage === totalPages
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/20"
      }
    `}
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}

export default ProjectShowcase;
