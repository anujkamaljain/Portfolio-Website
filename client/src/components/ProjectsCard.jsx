import React from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

// Smooth spring animation preset
const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

const ProjectsCard = ({ source, alter, title, body, link, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...smoothSpring }}
      viewport={{ once: true, amount: 0.1 }}
      className="will-change-transform h-full"
    >
      <div className="border border-primary card w-full h-full max-h-[420px] bg-base-100/20 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl flex flex-col">
        <figure className="p-4">
          <img
            src={source}
            alt={alter}
            loading="lazy"
            className="rounded-xl object-cover h-48 w-full"
          />
        </figure>
        <div className="card-body text-gray-600 flex-1 flex flex-col">
          <h2 className="card-title font-semibold text-lg text-blue-800">
            {title}
            {badge && (
              <div className="badge bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-sm">
                {badge}
              </div>
            )}
          </h2>
          <p className="text-sm leading-relaxed line-clamp-3 flex-1">{body}</p>
          <div className="card-actions justify-end mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition-all duration-200 flex items-center gap-1 px-3 py-1"
              style={{ willChange: "transform" }}
            >
              <SiGithub className="text-base" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
