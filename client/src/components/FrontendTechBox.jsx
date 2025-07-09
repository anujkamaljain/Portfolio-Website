import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiJest,
  SiFramer,
} from "react-icons/si";
import { motion } from "framer-motion";

const FrontendTechBox = () => {
  return (
    <div className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto">
      <motion.h1 className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        My Frontend Toolbox
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <FaHtml5 />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">HTML</div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <FaCss3Alt />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">CSS</div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <FaJs />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">
            JavaScript
          </div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="text-white text-2xl"
          >
            <FaReact />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">React</div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-3 py-2 bg-gradient-to-r from-cyan-400 to-teal-500 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-2xl"
          >
            <SiTailwindcss />
          </motion.div>
          <div className="ml-2 text-white font-semibold text-lg">
            Tailwind CSS
          </div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ x: [0, 2, 2, 0, 0], y: [0, 0, 2, 2, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-xl"
          >
            <SiTypescript />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">
            TypeScript
          </div>
        </div>

        <div className="w-full max-w-xs min-w-[160px] h-16 rounded-2xl flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="text-white text-xl"
          >
            <SiRedux />
          </motion.div>
          <div className="ml-3 text-white font-semibold text-lg">Redux</div>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-red-700 to-pink-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ translateY: [1, 5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiJest size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Jest</span>
        </div>

        <div className="btn w-full h-16 justify-start bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl">
          <motion.div
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiFramer size={24} />
          </motion.div>
          <span className="ml-3 font-semibold text-lg">Framer Motion</span>
        </div>
      </div>
    </div>
  );
};

export default FrontendTechBox;
