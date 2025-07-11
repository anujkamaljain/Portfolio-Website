import { FaBuilding } from "react-icons/fa6";
import { motion } from "framer-motion";

const ExperienceCard = ({
  name,
  title,
  dateStart,
  dateEnd,
  info,
  techstack,
  location,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl p-5 bg-white/5 backdrop-blur-md shadow-md border border-white/10 max-w-md w-full transition-all will-change-transform"
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 will-change-transform"
      >
        <div className="bg-cyan-600 p-3 rounded-xl">
          <FaBuilding size={24} />
        </div>
        <div>
          <p className="text-xl font-bold">{title}</p>
          <h2 className="text-cyan-400 font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">
            {dateStart} – {dateEnd}
          </p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-gray-500 text-sm will-change-transform"
      >
        {info}
      </motion.p>

      <div className="flex flex-wrap gap-2 mt-4">
        {techstack.map((tech) => (
          <span
            key={tech}
            className="badge badge-outline badge-info bg-white/10 border-cyan-400 hover:bg-cyan-600 hover:text-white transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
