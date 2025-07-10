import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4"
      id="certificates"
    >
      <motion.section className="bg-base-100/30 dark:bg-base-200/30 shadow-sm shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-8 gap-10 w-full max-w-screen-xl">
        <motion.h1
          className="text-3xl mb-10 mt-5 text-primary text-center underline"
          style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
        >
          Certificates
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 sm:mt-15">
          
        </div>
      </motion.section>
    </div>
  );
};

export default Certificates;
