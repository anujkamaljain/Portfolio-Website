import React from "react";
import {
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { GiDaisy } from "react-icons/gi"; // best visual match
import { motion } from "framer-motion";

const ExtraTechBox = () => {
  return (
    <div className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto">
      <motion.h1 className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        My Extra Toolbox
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

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiAmazonwebservices size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">AWS</span>
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
      </div>
    </div>
  );
};

export default ExtraTechBox;
