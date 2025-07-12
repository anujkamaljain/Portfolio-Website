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
          <CertificateCard
            source="/Backend.png"
            alter="Certificate image"
            link="https://namastedev.com/anujkamaljain1234/certificates/namaste-node"
            authority="NamasteDev.com"
            title="Namaste Dev certified Backend Developer"
            issuedDate="Issued Apr 2025"
            credentialId="03626196FCA5D2160B686758A6B"
          />
          <CertificateCard
            source="/React.png"
            alter="Certificate image"
            link="https://namastedev.com/anujkamaljain1234/certificates/namaste-react"
            authority="NamasteDev.com"
            title="Namaste Dev certified React.js Developer"
            issuedDate="Issued Oct 2024"
            credentialId="03626196FCA5D2160B6867581D5"
          />
          <CertificateCard
            source="/JS.png"
            alter="Certificate image"
            link="https://namastedev.com/anujkamaljain1234/certificates/namaste-javascript"
            authority="NamasteDev.com"
            title="NamasteDev certified Front-End Developer"
            issuedDate="Issued Aug 2024"
            credentialId="03626196FCA5D2160B68675884B"
          />
          <CertificateCard
            source="/Goldman.png"
            alter="Certificate image"
            link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_8ndtdFfDT6PmX7Ziz_1738927105494_completion_certificate.pdf"
            authority="Forage"
            title="Goldman Sachs - Software Engineering Job Simulation"
            issuedDate="Issued Feb 2025"
            credentialId="akzq9edyfuMpPB7LW"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Certificates;
