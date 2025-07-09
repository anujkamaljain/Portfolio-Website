import React from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const ProjectsCard = ({ source, alter, title, body, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="border border-primary card w-full mt-4 bg-transparent shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <figure className="p-4">
          <img
            src={source}
            alt={alter}
            className="rounded-xl object-cover h-48 w-full"
          />
        </figure>
        <div className="card-body text-gray-500">
          <h2 className="card-title font-semibold text-lg text-blue-800">
            {title}
            <div className="badge bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-sm">
              NEW
            </div>
          </h2>
          <p className="text-sm leading-relaxed">{body}</p>
          <div className="card-actions justify-end mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <SiGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
