import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-200 shadow-sm border-b border-base-300 sticky top-0 z-50 px-4 flex justify-around">
      <motion.a
        href="#home"
        className="flex justify-center items-center rounded-lg"
        initial={{ x: -218 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <p className="text-xl font-bold">Anuj Kamal Jain</p>
      </motion.a>

      <motion.div
        className="hidden md:flex items-center gap-4"
        initial={{ x: 218 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <ul className="menu menu-horizontal px-1">
          {[
            "home",
            "about-me",
            "skills",
            "experience",
            "projects",
            "certificates",
            "education",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a className="font-semibold capitalize" href={`#${section}`}>
                {section.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={(e) =>
              document.documentElement.setAttribute(
                "data-theme",
                e.target.checked ? "dark" : "pureriver"
              )
            }
          />
          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </g>
          </svg>
          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </g>
          </svg>
        </label>
      </motion.div>

      <div className="md:hidden flex items-center gap-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross2 className="text-xl" />
          ) : (
            <GiHamburgerMenu className="text-xl" />
          )}
        </button>
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={(e) =>
              document.documentElement.setAttribute(
                "data-theme",
                e.target.checked ? "dark" : "pureriver"
              )
            }
          />
          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </g>
          </svg>
          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </g>
          </svg>
        </label>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-base-200 shadow-md border-t border-base-300 md:hidden z-40">
          <ul className="menu menu-vertical px-4 py-2">
            {[
              "home",
              "about-me",
              "skills",
              "experience",
              "projects",
              "certificates",
              "education",
              "contact",
            ].map((section) => (
              <li key={section} onClick={() => setIsOpen(false)}>
                <a className="font-semibold capitalize" href={`#${section}`}>
                  {section.replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
