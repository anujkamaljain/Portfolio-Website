import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import ProjectsCard from "./ProjectsCard";

// Smooth spring animation preset
const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

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
        transition={{ ...smoothSpring }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1
          className="text-3xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mt-5">
          {/* Zephyra - Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring }}
            viewport={{ once: true, amount: 0.1 }}
            className="h-full"
          >
            <div className="border border-primary card w-full h-full max-h-[420px] bg-transparent shadow-md hover:shadow-xl transition duration-300 rounded-2xl flex flex-col">
              <figure className="p-4 relative">
                <img
                  src="/Zephyra.png"
                  alt="Zephyra Photo"
                  className="rounded-xl object-cover h-48 w-full"
                />
                <div className="absolute top-6 right-6 badge bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg border-0">
                  🏆 Top 10 / 4500+
                </div>
              </figure>
              <div className="card-body text-gray-500 flex-1 flex flex-col">
                <h2 className="card-title font-semibold text-lg text-blue-800">
                  Zephyra
                  <div className="badge bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-sm ml-2">
                    FEATURED
                  </div>
                </h2>
                <p className="text-sm leading-relaxed line-clamp-3 flex-1">
                  AI-powered mental wellness platform for Google Cloud Gen AI Exchange Hackathon. Features Gemini AI therapy, Vertex AI music/art generation, and real-time anonymous support forum.
                </p>
                <div className="card-actions justify-end mt-4 gap-2">
                  <a
                    href="https://zephyra.anujprojects.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn badge badge-outline border-green-400 text-green-600 hover:bg-green-100 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LNMCMS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 0.05 }}
            viewport={{ once: true, amount: 0.1 }}
            className="h-full"
          >
            <div className="border border-primary card w-full h-full max-h-[420px] bg-transparent shadow-md hover:shadow-xl transition duration-300 rounded-2xl flex flex-col">
              <figure className="p-4">
                <img
                  src="/LNMCMS.png"
                  alt="LNMCMS Photo"
                  className="rounded-xl object-cover h-48 w-full"
                />
              </figure>
              <div className="card-body text-gray-500 flex-1 flex flex-col">
                <h2 className="card-title font-semibold text-lg text-blue-800">
                  LNMCMS
                  <div className="badge bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow-sm ml-2">
                    NEW
                  </div>
                </h2>
                <p className="text-sm leading-relaxed line-clamp-3 flex-1">
                  Full-stack Complaint Management System for LNMIIT with three-tier RBAC, real-time chat via Socket.IO, and Chart.js analytics dashboard.
                </p>
                <div className="card-actions justify-end mt-4 gap-2">
                  <a
                    href="https://www.lnmcms.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn badge badge-outline border-green-400 text-green-600 hover:bg-green-100 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href="https://github.com/anujkamaljain/LNMCMS-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition"
                  >
                    <SiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BillFlow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="h-full"
          >
            <div className="border border-primary card w-full h-full max-h-[420px] bg-transparent shadow-md hover:shadow-xl transition duration-300 rounded-2xl flex flex-col">
              <figure className="p-4">
                <img
                  src="/BillFlow.png"
                  alt="BillFlow Photo"
                  className="rounded-xl object-cover h-48 w-full"
                />
              </figure>
              <div className="card-body text-gray-500 flex-1 flex flex-col">
                <h2 className="card-title font-semibold text-lg text-blue-800">
                  BillFlow
                </h2>
                <p className="text-sm leading-relaxed line-clamp-3 flex-1">
                  Full-stack billing management system with RBAC, JWT/OAuth authentication, invoice management, and inventory management with GST/tax compliance.
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-red-500 text-xl" />
            <h2 className="text-xl font-bold tracking-wide">
              Private Repository
            </h2>
          </div>
          <p className="py-4 text-sm leading-relaxed text-gray-300">
            Sorry! I've signed an{" "}
            <span className="text-red-500 font-semibold">NDA</span> for this
            product, so I'm unable to share its GitHub repository.
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
