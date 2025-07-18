import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="experience"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl min-h-screen will-change-transform"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl mb-10 mt-5 text-primary text-center underline will-change-transform"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Experience
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 sm:mt-15">
          <ExperienceCard
            name={"Altruist Technologies Pvt. Ltd."}
            title={"Technical Intern"}
            dateStart={"June 2025"}
            dateEnd={"Present"}
            techstack={["React.js", "Node.js", "Mongo-DB", "Express.js"]}
            info={
              "Contributed to building core frontend and backend features for a startup’s accounting platform as an intern, with guidance and support from my senior colleagues, using React.js, Node.js, Express.js, and MongoDB."
            }
            location={"Ambala, Haryana, India ⋅ On-site"}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
