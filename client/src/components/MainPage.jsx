import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certificates from "./Certificates";
import LetsConnect from "./LetsConnect";
import Education from "./Education";
import GlowingDotsBackground from "./GlowingDotsBackground";

const MainPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GlowingDotsBackground />
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <LetsConnect />
      <Footer />
    </div>
  );
};

export default MainPage;
