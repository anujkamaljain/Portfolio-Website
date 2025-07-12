import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="education"
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
          Education
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 sm:mt-15 justify-items-center">
          <EducationCard
            name="The LNM Institute of Information Technology"
            dateStart="2023"
            dateEnd="Present"
            info="Bachelor of Technology - B.Tech, Computer Science"
            location="Jaipur"
            cgpa="7.20"
            Logo={FaUniversity}
            gpa="CGPA"
          />
          <EducationCard
            name="Allen Career Institute"
            dateStart="2021"
            dateEnd="2023"
            info="JEE Preparation, Non-Medical (Science)"
            location="Patiala"
            cgpa="97"
            Logo={FaUniversity}
            gpa="Percentile"
          />
          <EducationCard
            name="Sri Guru Harkrishan Public School"
            dateStart="2021"
            dateEnd="2023"
            info="Non-Medical (Science), CBSE"
            location="Patiala"
            cgpa="78%"
            Logo={FaUniversity}
            gpa="Percentage"
          />
          <EducationCard
            name="Cecil Convent School"
            dateStart="2008"
            dateEnd="2021"
            info="Primary and Secondary Education, CBSE"
            location="Ambala Cantt"
            cgpa="97%"
            Logo={FaUniversity}
            gpa="Percentage"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Education;
