import React from "react";
import { motion } from "framer-motion";

const LetsConnect = () => {
  return (
    <div
      className="h-screen w-screen snap-start pt-3 flex items-center justify-center scroll-mt-20"
      id="contact"
    >
      <motion.section
        className="flex flex-col md:flex-row justify-between items-center bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-8 h-[90%] w-[90%] gap-8"
      >
        <h2>LetsConnect</h2>
        {/* content */}
      </motion.section>
    </div>
  );
};

export default LetsConnect;
