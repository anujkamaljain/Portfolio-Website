import React from "react";
import { motion } from "framer-motion";
import FrontendTechBox from "./FrontendTechBox";
import BackendTechBox from "./BackendTechBox";
import ExtraTechBox from "./ExtraTechBox";

const Skills = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="skills"
    >
      <motion.section
        className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-3xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Skills & Technologies
        </motion.h1>

        <div className="flex flex-col gap-6">
          <FrontendTechBox />
          <BackendTechBox />
          <ExtraTechBox />
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
