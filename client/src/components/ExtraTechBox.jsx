import React from "react";
import {
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { GiDaisy } from "react-icons/gi"; // best visual match
import { motion } from "framer-motion";
import { FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { FaMicrochip } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ExtraTechBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto"
    >
      <motion.h1 className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        My Extra Toolbox & Core Subjects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiGithub size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">GitHub</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiGit size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Git</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <GiDaisy size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">DaisyUI</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiGooglecloud size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">GCP</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ x: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiCplusplus size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">C++</span>
        </div>
        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaMicrochip size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Operating System</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaNetworkWired size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Computer Networks</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-green-700 to-emerald-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <GrDatabase size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">DBMS</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaProjectDiagram size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">OOP</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-yellow-500 to-amber-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiLeetcode size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">DSA</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExtraTechBox;
