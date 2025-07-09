import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import FrontendTechBox from "./FrontendTechBox";
import BackendTechBox from "./BackendTechBox";
import ExtraTechBox from "./ExtraTechBox";

const Skills = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="skills"
    >
      <motion.section className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl">
        <motion.h1
          className="text-2xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Skills & Technologies
        </motion.h1>
        <div className="md:flex-row items-center justify-around">
          <FrontendTechBox />
          <BackendTechBox />
          <ExtraTechBox />
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
