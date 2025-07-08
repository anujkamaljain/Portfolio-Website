import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      className="h-screen w-screen snap-start pt-3 flex items-center justify-center scroll-mt-20"
      id="education"
    >
      {" "}
      <motion.section
        className="flex flex-col md:flex-row justify-between items-center bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-8 h-[90%] w-[90%] gap-8"
      >
        <h2>Education</h2>
        {/* content */}
      </motion.section>
    </div>
  );
};

export default Education;
