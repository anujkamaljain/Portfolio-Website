import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

// Smooth spring animation preset
const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

const Experience = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="experience"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...smoothSpring }}
        viewport={{ once: true, amount: 0.1 }}
        className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl min-h-screen will-change-transform"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...smoothSpring, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl mb-10 mt-5 text-primary text-center underline will-change-transform"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Experience
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 sm:mt-15">
          <ExperienceCard
            name={"Kritu Capital"}
            title={"Full Stack Web Developer"}
            dateStart={"Dec 2025"}
            dateEnd={"Present"}
            techstack={["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "GCP", "Vercel"]}
            info={
              "Working as a Remote Full Stack Web Developer at an early stage startup, taking end-to-end ownership of product development. Designing and developing scalable web applications, handling architecture, feature implementation, API integration, and production deployments."
            }
            location={"Remote"}
          />
          <ExperienceCard
            name={"Surjana Solutions"}
            title={"Freelance Web Developer"}
            dateStart={"Jun 2025"}
            dateEnd={"Nov 2025"}
            techstack={["React.js", "Node.js", "MongoDB", "Express.js", "REST API", "JWT"]}
            info={
              "Delivered a complete invoice and billing management SaaS application using the MERN stack. Implemented secure JWT and OAuth authentication, invoice generation, purchase orders, credit/debit notes, inventory tracking, and GST compliant billing features."
            }
            location={"Freelance"}
          />
          <ExperienceCard
            name={"Altruist Technologies Pvt. Ltd."}
            title={"Technical Intern"}
            dateStart={"Jun 2025"}
            dateEnd={"Jul 2025"}
            techstack={["React.js", "Node.js", "MongoDB", "Express.js", "Git", "GitHub"]}
            info={
              "Worked on development and enhancement of internal company tools, contributing to feature implementation, system optimization, and workflow automation. Gained hands-on exposure to team-based development and version control practices."
            }
            location={"Ambala, Haryana ⋅ On-site"}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
