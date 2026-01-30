import { useEffect, useState, Suspense, lazy } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
const AboutMe = lazy(() => import("./AboutMe"));
const Skills = lazy(() => import("./Skills"));
const Experience = lazy(() => import("./Experience"));
const Projects = lazy(() => import("./Projects"));
const Certificates = lazy(() => import("./Certificates"));
const Education = lazy(() => import("./Education"));
const LetsConnect = lazy(() => import("./LetsConnect"));
const Footer = lazy(() => import("./Footer"));
import GlowingDotsBackground from "./GlowingDotsBackground";
import ScrollToTopButton from "./ScrollToTop";

const MainPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GlowingDotsBackground />
      <Navbar />
      <HomePage />
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <LetsConnect />
        <Footer />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
};

export default MainPage;
