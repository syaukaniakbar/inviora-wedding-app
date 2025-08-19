import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import client from "../client.jsx";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const query = `*[_type == "project" && slug.current == "${slug}"]{
            title,
            body,
            mainImage {
              asset->{_id, url},
              alt
            },
            url,
            website,
            stack[]->{
              title,
              icon {
                asset->{url}
              }
            },
            publishedAt
          }`;

        const data = await client.fetch(query);
        setProject(data[0]);
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
        <div className="relative mb-10">
          <div className="absolute inset-0 w-28 h-28 m-auto rounded-full bg-gray-500 opacity-10 animate-ping" />
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-gray-400 via-gray-700 to-gray-400 flex items-center justify-center shadow-2xl shadow-gray-400/30 border border-white/10">
            <span className="text-3xl font-extrabold animate-pulse">⚡</span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2 animate-fade-in">
          Crafting Your Experience...
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-6 animate-fade-in-slow">
          We’re loading your personalized portfolio filled with creativity,
          modern tech, and passion-driven projects. This won’t take long.
        </p>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-gray-400 to-gray-500 animate-loading-bar rounded-full" />
        </div>
        <p className="text-sm text-gray-500 italic animate-fade-in-slow">
          “Great designs start with great patience.”
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate("/project")}
            className="flex items-center gap-2 text-white hover:text-gray-300 px-3 py-2 rounded-md transition duration-200 cursor-pointer mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">Back</span>
          </button>

          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {project.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base font-medium uppercase tracking-wide text-gray-400">
              {/* Website Link */}
              <div>
                <h4 className="mb-4 text-white">Website</h4>
                {project.url ? (
                  <a
                    href={
                      project.url.startsWith("http")
                        ? project.url
                        : `https://${project.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.url}
                    className="inline-block max-w-xs truncate text-black hover:text-gray-700 bg-white px-3 py-2 rounded-md"
                  >
                    {project.url}
                  </a>
                ) : (
                  <span className="text-gray-500 italic">Not available</span>
                )}
              </div>
            </div>
          </div>

          {/* Main Image */}
          {project.mainImage?.asset?.url && (
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video border">
              <img
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt || project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Body Content */}
          <div
            className="prose prose-invert max-w-none text-white 
                      prose-headings:text-green-300 
                      prose-a:text-green-400 hover:prose-a:underline 
                      prose-strong:text-white prose-p:text-gray-300"
          >
            <PortableText value={project.body} />
          </div>

          {/* Tech Stack */}
          {project.stack?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200 hover:scale-105 transition-transform"
                  >
                    {tech.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioDetail;
