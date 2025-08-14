// import { useState, useEffect, useRef } from "react";
// import { client } from "../client.jsx";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "@/components/custom/Navbar.jsx";

// function Project() {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const projectsPerPage = 4;

//   const sectionRef = useRef(null);

//   //Fetch Projects Data from Sanity
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "project"] | order(publishedAt desc) {
//           title,
//           slug,
//           body,
//           url,
//           mainImage {
//             asset->{_id, url},
//             alt
//           },
//           stack[]->{
//             title,
//             icon { asset->{url} }
//           },
//           publishedAt
//         }`
//       )
//       .then((data) => {
//         setProjects(data);
//         setCurrentPage(1);
//         setIsLoading(false);
//       })
//       .catch(console.error);
//   }, []);

//   //Update filtered projects
//   useEffect(() => {
//     const filtered = projects.filter((project) =>
//       project.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProjects(filtered);
//     setCurrentPage(1); // reset ke halaman pertama saat search berubah
//   }, [searchTerm, projects]);

//   // Scroll ke atas (bagian section) setiap kali halaman berubah
//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [currentPage]);

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(
//     indexOfFirstProject,
//     indexOfLastProject
//   );
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
//         <div className="relative mb-10">
//           <div className="absolute inset-0 w-28 h-28 m-auto rounded-full bg-green-500 opacity-10 animate-ping" />
//           <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 flex items-center justify-center shadow-2xl shadow-green-400/30 border border-white/10">
//             <span className="text-4xl font-extrabold animate-pulse">⚡</span>
//           </div>
//         </div>
//         <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-2 animate-fade-in">
//           Crafting Your Experience...
//         </h2>
//         <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-6 animate-fade-in-slow">
//           We’re loading your personalized portfolio filled with creativity,
//           modern tech, and passion-driven projects. This won’t take long.
//         </p>
//         <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
//           <div className="h-full bg-gradient-to-r from-green-400 to-lime-500 animate-loading-bar rounded-full" />
//         </div>
//         <p className="text-sm text-gray-500 italic animate-fade-in-slow">
//           “Great designs start with great patience.”
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <section className="w-full bg-black py-12 px-6 flex flex-col items-center">
//         <div className="w-full max-w-xl">
//           <h2 className="text-white text-lg font-semibold mb-4 text-left">
//             Find a project
//           </h2>
//           <div className="relative">
//             <input
//               type="text"
//               aria-label="Search projects"
//               placeholder="Search projects..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-200 shadow-md"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
//               />
//             </svg>
//           </div>
//         </div>
//       </section>

//       <section
//         ref={sectionRef}
//         className="min-h-screen bg-black py-20 px-4 flex flex-col items-center text-white"
//         role="region"
//         aria-labelledby="projects-heading"
//       >
//         <header className="mb-16 text-center max-w-4xl" id="projects-heading">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-lime-400 to-green-500 mb-4">
//             My Creative Journey
//           </h1>
//           <p className="text-sm md:text-2xl text-gray-200 font-medium leading-relaxed">
//             A showcase of my boldest ideas, crafted with <br /> modern tech and
//             creative passion.
//           </p>
//         </header>

//         <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl w-full">
//           {currentProjects.map((project) => (
//             <motion.article
//               key={project._id || project.slug?.current}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true, amount: 0.3 }}
//               className="flex flex-col h-full rounded-3xl overflow-hidden bg-white/90 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl hover:shadow-green-400/10 hover:scale-[1.02] transition-all duration-500"
//             >
//               <Link
//                 to={`/project/${project.slug?.current}`}
//                 className="group block focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-500 active:scale-[0.98] transition duration-200 ease-in-out"
//                 aria-label={`View details for ${project.title}`}
//               >
//                 <div className="h-64 w-full overflow-hidden relative">
//                   <img
//                     src={project.mainImage?.asset?.url || "/placeholder.jpg"}
//                     alt={
//                       project.mainImage?.alt || `Preview of ${project.title}`
//                     }
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-[.9] group-hover:brightness-100"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                 </div>

//                 <div className="p-6 text-neutral-900 dark:text-white">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-sm md:text-base mb-3 text-left line-clamp-3">
//                     {project.body?.[0]?.children?.[0]?.text ??
//                       "No description available."}
//                   </p>

//                   {project.stack?.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {project.stack.map((tech) => (
//                         <span
//                           key={tech._key || tech.title}
//                           className="flex items-center gap-2 text-xs md:text-sm bg-gray-200 text-black dark:bg-white/10 dark:text-white px-3 py-1 rounded-full"
//                         >
//                           {tech.icon?.asset?.url && (
//                             <img
//                               src={tech.icon.asset.url}
//                               alt={tech.title}
//                               className="w-4 h-4"
//                               loading="lazy"
//                             />
//                           )}
//                           {tech.title}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </Link>

//               {project.url && (
//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`View live demo of ${project.title}`}
//                   className="block w-full mt-auto bg-black text-white hover:bg-gray-900 hover:text-green-400 hover:scale-[1.03] hover:shadow-lg font-semibold text-center text-xs sm:text-sm md:text-base px-4 py-4 rounded-b-3xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500"
//                 >
//                   LIVE DEMO
//                 </a>
//               )}
//             </motion.article>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
//           {/* Previous */}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition"
//           >
//             ←
//           </button>

//           {/* Numbered Buttons */}
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//             <button
//               key={num}
//               onClick={() => setCurrentPage(num)}
//               className={`px-4 py-2 rounded-full transition font-medium ${
//                 num === currentPage
//                   ? "bg-green-500 text-black"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               {num}
//             </button>
//           ))}

//           {/* Next */}
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition"
//           >
//             →
//           </button>
//         </div>
//       </section>

//       <section className="w-full bg-black py-16 px-4 md:px-8 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="max-w-6xl mx-auto bg-neutral-900 px-6 md:px-16 py-10 rounded-2xl shadow-xl"
//         >
//           <h2 className="text-xl md:text-3xl font-bold mb-3">
//             Interested in working together?
//           </h2>
//           <p className="text-gray-400 text-sm md:text-base mb-8">
//             I'm always open to discussing new opportunities and interesting
//             projects.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/contact"
//               aria-label="Go to contact page"
//               className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-green-400"
//             >
//               Get In Touch
//             </Link>

//             <a
//               href="/CV_Akhmad Syaukani Akbar.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="View resume (opens in new tab)"
//               className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-white"
//             >
//               View Resume
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
//           className="mt-12"
//         >
//           <Link
//             to="/"
//             aria-label="Back to home"
//             className="text-sm md:text-base text-green-400 hover:text-green-300 transition underline underline-offset-4"
//           >
//             ← Back to Home
//           </Link>
//         </motion.div>
//       </section>
//     </>
//   );
// }

// export default Project;
