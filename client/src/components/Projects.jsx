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
      <motion.section
        className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-3xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mt-5">
          {/* Project Cards */}
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
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border border-primary card w-full bg-transparent shadow-md hover:shadow-xl transition duration-300 rounded-2xl">
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
                  <div className="badge bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-sm ml-2">
                    NEW
                  </div>
                </h2>
                <p className="text-sm leading-relaxed">
                  A Billing & Accounting Software built using the MERN stack. I
                  contributed to invoice generation, payment tracking, and
                  dashboard logic.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="btn badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition"
                    style={{ willChange: "transform" }}
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
              "A full-stack Tinder for Developers to find and make new friends. Requests-based connections and Like-Dislike feature for each profile."
            }
            link="https://github.com/anujkamaljain/DevTinder-Backend"
          />

          <ProjectsCard
            source={"/Netflix-GPT.png"}
            alter={"Netflix-GPT Photo"}
            title={"Netflix-GPT"}
            body={
              "Developed an OTT web app using React.js, integrated with TMDB API. Features a Gemini-based movie recommendation system."
            }
            link="https://github.com/anujkamaljain/Netflix-Gpt-Project"
          />

          <ProjectsCard
            source={"/Food_Ordering.png"}
            alter={"Food_Ordering Photo"}
            title={"InstaFood"}
            body={
              "A Swiggy-clone food ordering web app using React.js with dynamic restaurant rendering & advanced filtering/search from Swiggy's API."
            }
            link="https://github.com/anujkamaljain/Food-Ordering-App"
          />
        </div>
      </motion.section>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <motion.div
          className="modal-box bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl rounded-xl border border-gray-700 backdrop-blur"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-red-500 text-xl" />
            <h2 className="text-xl font-bold tracking-wide">
              Private Repository
            </h2>
          </div>
          <p className="py-4 text-sm leading-relaxed text-gray-300">
            Sorry! I’ve signed an{" "}
            <span className="text-red-500 font-semibold">NDA</span> for this
            product, so I’m unable to share its GitHub repository.
            <br />
            You're welcome to explore my other open-source projects. Thanks for
            understanding!
          </p>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-500 text-white hover:opacity-90 border-none">
                Close
              </button>
            </form>
          </div>
        </motion.div>
      </dialog>
    </div>
  );
};

export default Projects;
