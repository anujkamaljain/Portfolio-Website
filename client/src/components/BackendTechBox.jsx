import React from "react";
import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

const BackendTechBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto"
    >
      <motion.h1 className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        My Backend Toolbox
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-lime-600 to-green-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <SiNodedotjs size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Node.js</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ x: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiExpress size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Express.js</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-green-600 to-emerald-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <SiMongodb size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">MongoDB</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-pink-600 to-rose-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <SiJsonwebtokens size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">JWT</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ x: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiPostman size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Postman</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BackendTechBox;
