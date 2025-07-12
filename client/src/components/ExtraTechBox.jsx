import React from "react";
import {
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiLeetcode,
} from "react-icons/si";
import { GiDaisy } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { FaMicrochip } from "react-icons/fa6";

const ExtraTechBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto will-change-transform"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 will-change-transform"
      >
        My Extra Toolbox & Core Subjects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        {[
          {
            icon: <SiGithub size={24} />,
            label: "GitHub",
            from: "gray-700",
            to: "gray-900",
          },
          {
            icon: <SiGit size={24} />,
            label: "Git",
            from: "red-500",
            to: "orange-500",
            animate: "y",
          },
          {
            icon: <GiDaisy size={24} />,
            label: "DaisyUI",
            from: "pink-500",
            to: "yellow-400",
          },
          {
            icon: <SiAmazonwebservices size={24} />,
            label: "AWS",
            from: "yellow-600",
            to: "orange-500",
          },
          {
            icon: <SiCplusplus size={24} />,
            label: "C++",
            from: "sky-600",
            to: "cyan-500",
            animate: "x",
          },
          {
            icon: <FaMicrochip size={24} />,
            label: "Operating System",
            from: "pink-600",
            to: "rose-500",
          },
          {
            icon: <FaNetworkWired size={24} />,
            label: "Computer Networks",
            from: "blue-700",
            to: "cyan-500",
          },
          {
            icon: <GrDatabase size={24} />,
            label: "DBMS",
            from: "green-700",
            to: "emerald-500",
          },
          {
            icon: <FaProjectDiagram size={24} />,
            label: "OOPs",
            from: "indigo-600",
            to: "purple-600",
          },
          {
            icon: <SiLeetcode size={24} />,
            label: "DSA",
            from: "yellow-500",
            to: "amber-400",
          },
        ].map(({ icon, label, from, to, animate = "scale" }) => (
          <div
            key={label}
            className={`btn w-full h-16 justify-start bg-gradient-to-r from-${from} to-${to} text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl`}
          >
            <motion.div
              animate={
                animate === "x"
                  ? { x: [0, 2, 0] }
                  : animate === "y"
                  ? { y: [0, -4, 0] }
                  : { scale: [1, 1.1, 1] }
              }
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {icon}
            </motion.div>
            <span className="ml-3 font-semibold text-lg">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraTechBox;
