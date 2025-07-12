import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const CertificateCard = ({
  source,
  alter,
  link,
  title,
  authority,
  issuedDate,
  credentialId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="border border-primary card w-full mt-4 bg-transparent shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <figure className="p-3">
          <img
            src={source}
            alt={alter}
            className="rounded-xl object-cover h-48 w-full"
          />
        </figure>
        <div className="card-body text-gray-500">
          <h2 className="card-title font-bold text-lg text-blue-800">
            {title}
          </h2>
          <div className="card-actions justify-start">
            <div>
              <p className="text-sm leading-relaxed">{authority}</p>
              <p className="text-sm leading-relaxed">{issuedDate}</p>
              <div className="flex flex-col items-start justify-start text-sm leading-relaxed overflow-hidden">
                <span className="font-semibold mr-1 shrink-0">
                  Credential Id:
                </span>
                <span
                  className="truncate block overflow-hidden text-ellipsis whitespace-nowrap max-w-[160px]"
                  title={credentialId}
                >
                  {credentialId}
                </span>
              </div>
            </div>
          </div>
          <div className="justify-end card-actions mt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-outline border-blue-400 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              Show credential <CiLocationArrow1 />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
