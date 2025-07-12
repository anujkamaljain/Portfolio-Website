import { motion } from "framer-motion";
import { MdLocationOn, MdOutlinePushPin } from "react-icons/md";

const EducationCard = ({
  name,
  title,
  dateStart,
  dateEnd,
  info,
  location,
  cgpa,
  Logo,
  gpa
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl p-5 bg-transparent shadow-lg border border-white/10 max-w-sm w-full backdrop-blur-xl"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary p-3 rounded-xl">
          <Logo size={24} />
        </div>
        <div>
          <h2 className="text-primary font-semibold">{name}</h2>
           <p className="text-sm text-gray-500 flex items-center gap-1">
            <MdLocationOn size={14} />
            {location}
          </p>
          <p className="text-md text-gray-600">{info}</p>
          <p className="text-sm text-gray-500">
            {dateStart}  –  {dateEnd}
          </p>

          {cgpa && (
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-1">
              <MdOutlinePushPin size={20} className="text-primary" /> {gpa}: {cgpa}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
