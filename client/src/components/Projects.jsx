import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="projects"
    >
      <motion.section className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl min-h-screen">
        <motion.h1
          className="text-2xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 mt-5 sm:mt-15">
          <ProjectsCard
            source={"/LNMCMS.png"}
            alter={"LNMCMS Photo"}
            title={"LNMCMS"}
            body={
              "A Complaint Portal for our College to register complains and view them, with role based authentication Different Dashboards for different types of users."
            }
            link="https://github.com/anujkamaljain/LNMCMS-Frontend"
          />
          <ProjectsCard
            source={"/DevTinder.png"}
            alter={"DevTinder Photo"}
            title={"DevTinder"}
            body={
              "A full-stack Tinder for Developers to find and make new friends. Requests based connections and Like-Dislike feature for every profile."
            }
            link="https://github.com/anujkamaljain/DevTinder-Backend"
          />
          <ProjectsCard
            source={"/Netflix-GPT.png"}
            alter={"Netflix-GPT Photo"}
            title={"Netflix-GPT"}
            body={
              "Developed an OTT web application using React.js, integrating data from the TMDB API. Implemented a Gemini-based movie recommendation system"
            }
            link="https://github.com/anujkamaljain/Netflix-Gpt-Project"
          />
          <ProjectsCard
            source={"/Food_Ordering.png"}
            alter={"Food_Ordering Photo"}
            title={"InstaFood"}
            body={
              "A Food ordering web application made using React.js using data from Swiggy API showcasing dynamic rendering of restaurant data & search functionality."
            }
            link="https://github.com/anujkamaljain/Food-Ordering-App"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
