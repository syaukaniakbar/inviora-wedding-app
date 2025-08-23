import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import client from "../../client.jsx";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Loading from "@/components/custom/Loading";

const Detail = () => {
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
          stacks[]->{
            title
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

  if (isLoading) return <Loading />;

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/project")}
          className="inline-flex items-center gap-2 text-sm md:text-base font-medium
                     text-gray-300 hover:text-white border border-gray-700 px-4 py-2
                     rounded-lg transition-all duration-200 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-gray-500 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Header */}
        <header className="space-y-3 sm:space-y-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
                         text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-prose leading-relaxed">
            Explore the details of this project, from concept to deployment –
            built with modern technologies and clean design principles.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm italic">
            Published: {new Date(project.publishedAt).toLocaleDateString()}
          </p>
        </header>

        {/* Main Image */}
        {project.mainImage?.asset?.url && (
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 group transition-shadow duration-300">
            <img
              src={project.mainImage.asset.url}
              alt={project.mainImage.alt || project.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay CTA Desktop */}
            {project.url && (
              <a
                href={
                  project.url.startsWith("http")
                    ? project.url
                    : `https://${project.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 sm:flex"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition"
                >
                  Explore Project <ExternalLink className="w-4 h-4" />
                </motion.span>
              </a>
            )}

            {/* Mobile CTA */}
            {project.url && (
              <a
                href={
                  project.url.startsWith("http")
                    ? project.url
                    : `https://${project.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden absolute inset-0 flex items-center justify-center"
                aria-label="Visit Live Project"
              >
                {/* Overlay gelap + blur */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-full shadow-md"
                >
                  Visit Live Project <ExternalLink className="w-4 h-4" />
                </motion.span>
              </a>
            )}
          </div>
        )}

        {/* Body Content */}
        <article
          className="prose prose-invert max-w-full sm:max-w-none text-white
                            prose-headings:text-white prose-a:text-gray-300 hover:prose-a:text-white
                            prose-strong:text-white prose-p:text-gray-300 prose-hr:border-gray-700"
        >
          <PortableText value={project.body} />
        </article>

        <hr className="border-gray-700" />

        {/* Tech Stack */}
        {project.stacks?.length > 0 && (
          <div className="mt-12">
            {/* Heading */}
            <div className="inline-flex items-center text-black mb-6 bg-white py-3 px-6 border-2 border-gray-800 rounded-xl shadow-md">
              <h2 className="text-xl tracking-tight">Tech Stack</h2>
            </div>

            {/* Subheading */}
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mb-8">
              Tools, frameworks, and technologies I use to build robust and
              modern web applications. From frontend to backend, each tech in my
              toolkit helps me deliver elegant, efficient solutions.
            </p>

            {/* Stack Items */}
            <motion.ul
              className="flex flex-wrap justify-start gap-4 sm:gap-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {project.stacks.map((tech) => (
                <motion.li
                  key={tech.id || tech.title}
                  className="flex flex-col items-center justify-center w-30 sm:w-33 md:w-36 p-2
                             bg-black border rounded shadow-md
                             hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer text-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">
                    {tech.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Detail;
