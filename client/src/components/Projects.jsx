import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import ProjectsCard from "./ProjectsCard";
import { FaLock } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="projects"
    >
      <motion.section className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl min-h-screen">
        <motion.h1
          className="text-3xl mb-10 mt-5 text-primary text-center underline"
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="border border-primary card w-full mt-4 bg-transparent shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <figure className="p-4">
                <img
                  src="/BillFlow.png"
                  alt="BillFlow Photo"
                  className="rounded-xl object-cover h-48 w-full"
                />
              </figure>
              <div className="card-body text-gray-500">
                <h2 className="card-title font-semibold text-lg text-blue-800">
                  BillFlow
                  <div className="badge bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-sm">
                    NEW
                  </div>
                </h2>
                <p className="text-sm leading-relaxed">
                  A Billing & Accounting Software, built using MERN stack. I contributed to the key features of this website including invoice generation & payment management.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="btn badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <SiGithub /> GitHub
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
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
              "Developed an OTT web application using React.js, integrating data from the TMDB API. Implemented a Gemini-based movie recommendation system."
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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl rounded-xl border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-red-500 text-xl" />
            <h2 className="text-xl font-bold tracking-wide">
              403 Forbidden!
            </h2>
          </div>

          <p className="py-4 text-sm leading-relaxed text-gray-300">
            Sorry! I’ve signed an{" "}
            <span className="text-red-500 font-semibold">NDA</span> for this
            product, so I’m unable to share its GitHub repository.
            <br />
            However, you're welcome to explore my other open-source projects
            from my portfolio website. Thanks for understanding!
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-500 text-white hover:opacity-90 border-none">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
