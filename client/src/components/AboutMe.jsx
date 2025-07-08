import React from "react";
import { motion } from "framer-motion";
import Timeline from "./TimeLine";

const AboutMe = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="about-me"
    >
      <motion.section className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl">
        <div className="flex items-center justify-center">
          <motion.h1
            className="text-2xl mb-10 mt-5 text-primary text-center underline"
            style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
          >
            My TimeLine
          </motion.h1>
        </div>

        <Timeline />
      </motion.section>
    </div>
  );
};

export default AboutMe;
