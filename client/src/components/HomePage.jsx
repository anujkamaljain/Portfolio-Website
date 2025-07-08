import React from "react";
import { motion } from "framer-motion";
import profileImage from "/photo.jpeg";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { GiOwl } from "react-icons/gi";

const HomePage = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="home"
    >
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-between bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl"
      >
        <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 max-w-2xl w-full">
          <motion.span
            className="text-sm tracking-wide uppercase text-primary animate-bounce"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            WELCOME TO MY PORTFOLIO ✨
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm{" "}
            <motion.span className="text-primary animate-pulse">
              Anuj Kamal Jain
            </motion.span>
            <br />
            <span className="text-accent">Full Stack Developer 🧑‍💻</span>
          </motion.h1>

          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 relative md:hidden self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={profileImage}
              alt="Anuj Avatar"
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-primary"
            />

            <div className=" w-full absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-5 px-3 py-1 rounded-full bg-base-200/60 backdrop-blur-md shadow border border-base-300">
              <span
                className="w-2 h-2 rounded-full bg-green-400"
                style={{
                  boxShadow: "0 0 8px rgba(34,197,94,0.8)",
                  animation: "breathe 2s infinite ease-in-out",
                }}
              />
              <span className="text-primary text-xs font-medium">
                Actively looking
              </span>
            </div>
          </motion.div>

          <motion.p
            className="text-base-content/80 text-sm sm:text-base mt-4 md:mt-0"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I specialize in crafting robust, end-to-end web applications that
            combine intuitive user experiences with powerful back-end
            functionality. With a focus on responsive design, scalable
            architectures, and modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="btn btn-primary rounded-full px-6 font-semibold text-center w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              download
              className="btn btn-outline rounded-full px-6 font-semibold text-center w-full sm:w-auto"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center sm:justify-start items-center gap-4 w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              className="btn btn-circle bg-base-100/10 border border-base-content/20 text-primary hover:text-accent hover:translate-y-0.5 transition-all duration-100 ease-in"
              href="https://www.linkedin.com/in/anujkamaljain-/"
            >
              <LiaLinkedinIn className="text-lg sm:text-xl" />
            </a>
            <a
              className="btn btn-circle bg-base-100/10 border border-base-content/20 text-primary hover:text-accent hover:translate-y-0.5 transition-all duration-100 ease-in"
              href="https://github.com/anujkamaljain"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </a>
            <a
              className="btn btn-circle bg-base-100/10 border border-base-content/20 text-primary hover:text-accent hover:translate-y-0.5 transition-all duration-100 ease-in"
              href="https://codolio.com/profile/AnujKjain"
            >
              <GiOwl className="text-lg sm:text-xl" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:block relative w-72 h-72 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={profileImage}
            alt="Anuj Avatar"
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-primary"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-base-200/60 backdrop-blur-md shadow border border-base-300">
            <span
              className="w-3 h-3 rounded-full bg-green-400"
              style={{
                boxShadow: "0 0 10px rgba(34,197,94,0.8)",
                animation: "breathe 2s infinite ease-in-out",
              }}
            />
            <span className="text-primary font-medium text-xs sm:text-sm whitespace-nowrap">
              Actively looking for opportunities
            </span>
          </div>

          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl opacity-50 animate-pulse"></div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
