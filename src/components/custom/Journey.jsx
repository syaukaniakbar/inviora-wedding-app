import { motion } from "framer-motion";

function Journey() {
  const experiences = [
    {
      image: "DAVILA-LOGO-WHITE-PNG.png",
      company: "DAVILA CORP",
      role: "Software Developer",
      period: "Feb 2025 - Present",
      description: [
        "Developed and optimized an online registration platform for 1,500+ participants, integrating Midtrans payment gateway and ensuring 99.9% uptime.",
        "Designed, implemented, and maintained responsive user interfaces (React, Tailwind CSS), delivering smooth multi-device experiences.",
        "Configured and managed VPS environments (Ubuntu, Nginx, SSL) for application deployment, ensuring secure, reliable, and high-performance production environments.",
        "Provided technical support for videotron and digital signage systems, including seamless integration of visual display solutions for live events.",
        "Assembled, configured, and maintained computer hardware, diagnosing and resolving technical issues.",
      ],
    },
    {
      image: "graviton.png",
      company: "Graviton Softworks",
      role: "UI/UX Designer & Software Developer",
      period: "Feb 2024 - Feb 2025",
      description: [
        "Built and managed a software agency, successfully delivering high-impact projects and developing strong client relationships.",
        "Implemented a high-volume registration platform supporting hundreds of simultaneous users.",
        "Managed full project lifecycle, from requirements gathering, planning, execution, to deployment and maintenance.",
      ],
    },
    {
      image: "logo-kominfo.png",
      company: "DISKOMINFO",
      role: "Student Intern",
      period: "Jun 2022 - August 2022",
      description: [
        "Assist members of DISKOMINFO (Dinas Komunikasi dan Informatika) Samarinda application division to create TWAP (Tim Walikota untuk Akselerasi Pembangunan) web pages.",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-black py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white mb-4">
            My Professional Journey
          </h2>
          <p className="text-sm md:text-2xl text-gray-200 font-medium leading-relaxed">
            A journey through the roles and companies that shaped <br /> my
            expertise in UI/UX and frontend engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 ml-8 relative group"
            >
              {/* Icon */}
              <span className="absolute -left-16 select-none flex items-center justify-center w-16 h-16 p-2 rounded-full border-4 border-gray-600 bg-black group-hover:border-white transition-all duration-300">
                <img src={exp.image} alt="" />
              </span>

              {/* Content Card */}
              <div className="bg-black border-1 border-gray-600 p-6 md:p-12 rounded-3xl shadow-xl group-hover:shadow-white/10 transition-all duration-300 ml-7 ">
                <h3 className="text-2xl font-bold text-white mb-1 select-none">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-lg mb-2 select-none">
                  {exp.company}
                </p>
                <span className="text-gray-500 text-sm block mb-4 select-none">
                  {exp.period}
                </span>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      {/* Custom Bullet Icon */}
                      <span className="flex-shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-white to-gray-400 group-hover:scale-125 transition-transform duration-300" />

                      {/* Text */}
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 select-none">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
