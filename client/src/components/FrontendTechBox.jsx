import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiJest,
  SiFramer,
} from "react-icons/si";
import { motion } from "framer-motion";

const FrontendTechBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="my-4 text-center py-10 px-7 rounded-3xl bg-transparent shadow-xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto will-change-transform"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 will-change-transform"
      >
        My Frontend Toolbox
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
        {[
          {
            icon: <FaHtml5 />,
            label: "HTML",
            from: "orange-500",
            to: "yellow-400",
            animation: { scaleY: [1, 1.3, 1] },
          },
          {
            icon: <FaCss3Alt />,
            label: "CSS",
            from: "blue-500",
            to: "cyan-400",
            animation: { y: [0, -4, 0] },
          },
          {
            icon: <FaJs />,
            label: "JavaScript",
            from: "yellow-400",
            to: "orange-500",
            animation: { x: [0, 2, 0], y: [0, -2, 0] },
          },
          {
            icon: <FaReact />,
            label: "React",
            from: "purple-500",
            to: "blue-500",
            animation: { rotate: 360 },
            duration: 10,
            ease: "linear",
          },
          {
            icon: <SiTailwindcss />,
            label: "Tailwind CSS",
            from: "cyan-400",
            to: "teal-500",
            animation: { scale: [1, 1.2, 1] },
          },
          {
            icon: <SiTypescript />,
            label: "TypeScript",
            from: "blue-600",
            to: "blue-400",
            animation: { x: [0, 2, 2, 0, 0], y: [0, 0, 2, 2, 0] },
          },
          {
            icon: <SiRedux />,
            label: "Redux",
            from: "purple-600",
            to: "indigo-500",
            animation: { rotate: 360 },
            duration: 10,
            ease: "linear",
          },
          {
            icon: <SiJest size={24} />,
            label: "Jest",
            from: "red-700",
            to: "pink-500",
            animation: { translateY: [1, 5, 1] },
          },
          {
            icon: <SiFramer size={24} />,
            label: "Framer Motion",
            from: "fuchsia-600",
            to: "purple-500",
            animation: { scaleX: [1, 1.1, 1] },
          },
        ].map(
          ({
            icon,
            label,
            from,
            to,
            animation,
            duration = 2,
            ease = "easeInOut",
          }) => (
            <div
              key={label}
              className={`btn w-full h-16 justify-start bg-gradient-to-r from-${from} to-${to} text-white shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-2xl`}
            >
              <motion.div
                animate={animation}
                transition={{ repeat: Infinity, duration, ease }}
              >
                {icon}
              </motion.div>
              <span className="ml-3 font-semibold text-lg">{label}</span>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default FrontendTechBox;
