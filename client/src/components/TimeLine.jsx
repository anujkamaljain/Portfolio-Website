import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: "Completed my 10th",
    description:
      "Successfully completed my 10th grade from Cecil Convent School with a strong academic foundation. This year marked the beginning of my interest in Science and Technology. I scored 97.2% in my 10th Grade.",
  },
  {
    year: "2023",
    title: "Gave JEE & Completed my 12th",
    description:
      "Completed 12th grade from Sri Guru Harkrishan Public School with 76.6% in the Science stream (PCM). Also appeared for JEE Mains and achieved a 97 Percentile, reinforcing my dedication towards pursuing engineering and technology.",
  },
  {
    year: "2024",
    title: "Completed 1st Year at LNMIIT",
    description:
      'Completed my first year at LNMIIT with a SGPA of "5.98" in the 1st semester and "7.31" in the 2nd semester, resulting in a cumulative CGPA of "6.64". More importantly, I found my interest in Web Development and started actively building projects and learning full-stack technologies.',
  },
  {
    year: "2025",
    title: "Completed 2nd Year & Landed an Internship",
    description:
      'Completed 2nd year with a SGPA of "7.39" in the 3rd semester and "8.10" in the 4th semester, resulting in a cumulative CGPA of "7.20". While sharpening my full-stack development and DSA skills, I successfully landed an internship at Altruist Technologies Pvt. Ltd. as a Technical Intern working with the web development team — marking the start of my professional journey.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-10 px-4 sm:px-8">
      {timelineData.map((item, idx) => (
        <motion.li
          key={item.year}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="timeline-middle">
            <div className="bg-primary text-white p-2 rounded-full shadow-md animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div
            className={`${
              idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
            } mb-16 px-2 sm:px-4`}
          >
            <time className="font-mono italic text-sm text-primary">
              {item.year}
            </time>
            <h3 className="text-lg font-bold text-base-content mt-1 underline decoration-accent decoration-2 underline-offset-4">
              {item.title}
            </h3>
            <p className="text-sm text-base-content/80 mt-2 leading-relaxed tracking-wide">
              {item.description}
            </p>
          </div>
          <hr />
        </motion.li>
      ))}
    </ul>
  );
};

export default Timeline;
