import { FaBuilding } from "react-icons/fa6"; // you can swap this with any other icon
import { motion } from "framer-motion";

const ExperienceCard = ({
  name,
  title,
  dateStart,
  dateEnd,
  info,
  techstack,
  location
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-5 bg-white/5 backdrop-blur-md shadow-xl border border-white/10 max-w-md w-full transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="bg-cyan-600 p-3 rounded-xl">
          <FaBuilding size={24} />
        </div>
        <div>
          <p className="text-xl font-bold">{title}</p>
          <h2 className=" text-cyan-400 font-semibold">{name}</h2>

          <p className="text-sm text-gray-500">
            {dateStart} – {dateEnd}
          </p>
          <p className="text-sm text-gray-500">
            {location}
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-500 text-sm">{info}</p>

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
