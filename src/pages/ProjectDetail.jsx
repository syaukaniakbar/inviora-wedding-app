// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { PortableText } from "@portabletext/react";
// import { client } from "../client.jsx";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react"; // pastikan sudah install lucide-react

// const PortfolioDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [project, setProject] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const query = `*[_type == "project" && slug.current == "${slug}"]{
//           title,
//           body,
//           mainImage {
//             asset->{_id, url},
//             alt
//           },
//           client,
//           date,
//           category,
//           website,
//           stack[]->{
//             title,
//             icon {
//               asset->{url}
//             }
//           },
//           publishedAt
//         }`;

//         const data = await client.fetch(query);
//         setProject(data[0]);
//       } catch (err) {
//         console.error("Error fetching project:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProject();
//   }, [slug]);

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-16 md:py-20">
//       {isLoading ? (
//         <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
//           <div className="relative mb-10">
//             <div className="absolute inset-0 w-28 h-28 m-auto rounded-full bg-green-500 opacity-10 animate-ping" />
//             <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 flex items-center justify-center shadow-2xl shadow-green-400/30 border border-white/10">
//               <span className="text-4xl font-extrabold animate-pulse">⚡</span>
//             </div>
//           </div>
//           <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-2 animate-fade-in">
//             Crafting Your Experience...
//           </h2>
//           <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-6 animate-fade-in-slow">
//             We’re loading your personalized portfolio filled with creativity,
//             modern tech, and passion-driven projects. This won’t take long.
//           </p>
//           <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
//             <div className="h-full bg-gradient-to-r from-green-400 to-lime-500 animate-loading-bar rounded-full" />
//           </div>
//           <p className="text-sm text-gray-500 italic animate-fade-in-slow">
//             “Great designs start with great patience.”
//           </p>
//         </div>
//       ) : project ? (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto space-y-12"
//         >
//           {/* Tombol kembali */}
//           <button
//             onClick={() => navigate("/portfolio")}
//             className="flex items-center gap-2 text-green-400 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition duration-200 mb-6"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="text-sm md:text-base font-medium">Back</span>
//           </button>

//           {/* Header */}
//           <div className="space-y-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
//               {project.title}
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base font-medium uppercase tracking-normal md:tracking-wider text-gray-400">
//               <div>
//                 <h4 className="mb-1 text-white">Client</h4>
//                 <p className="text-gray-300 normal-case font-normal">
//                   {project.client || "Full Name"}
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-1 text-white">Date</h4>
//                 <p className="text-gray-300 normal-case font-normal">
//                   {project.date || "May 26, 2025"}
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-1 text-white">Category</h4>
//                 <p className="text-gray-300 normal-case font-normal">
//                   {project.category || "Webflow"}
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-1 text-white">Website</h4>
//                 <a
//                   href={project.website || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-400 hover:underline break-all"
//                 >
//                   {project.website || "www.akhmadsyaukaniakbar.site"}
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Gambar utama */}
//           {project.mainImage?.asset?.url && (
//             <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
//               <img
//                 src={project.mainImage.asset.url}
//                 alt={project.mainImage.alt || project.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}

//           {/* Konten body */}
//           <div className="prose prose-invert max-w-none text-white prose-headings:text-green-300 prose-a:text-green-400 hover:prose-a:underline prose-strong:text-white prose-p:text-gray-300">
//             <PortableText value={project.body} />
//           </div>

//           {/* Tech stack */}
//           {project.stack?.length > 0 && (
//             <div>
//               <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
//               <ul className="flex flex-wrap gap-3">
//                 {project.stack.map((tech, idx) => (
//                   <li
//                     key={idx}
//                     className="px-4 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200 hover:scale-105 transition-transform"
//                   >
//                     {tech.title}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </motion.div>
//       ) : (
//         <p className="text-center text-gray-400">Project not found.</p>
//       )}
//     </section>
//   );
// };

// export default PortfolioDetail;
