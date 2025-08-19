import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function GetInTouch() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-neutral-900 px-6 md:px-16 py-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-3">
          Interested in working together?
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            aria-label="Go to contact page"
            className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Get In Touch
          </Link>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume (opens in new tab)"
            className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-12"
      >
        <Link
          to="/"
          aria-label="Back to home"
          className=" text-sm md:text-base text-white hover:text-gray-200 transition cursor-pointer"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default GetInTouch;
