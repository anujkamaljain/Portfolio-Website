import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Smooth spring animation preset
const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

const gentleSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

// Toast notification component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.9 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 ${type === "success"
        ? "bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white"
        : "bg-gradient-to-r from-red-500/90 to-rose-500/90 text-white"
      }`}
  >
    {type === "success" ? (
      <FaCheckCircle className="text-2xl animate-bounce" />
    ) : (
      <FaTimesCircle className="text-2xl" />
    )}
    <span className="font-medium text-sm sm:text-base">{message}</span>
    <button
      onClick={onClose}
      className="ml-2 hover:scale-110 transition-transform"
    >
      ✕
    </button>
  </motion.div>
);

// Loader spinner component
const Loader = () => (
  <motion.span
    className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
  />
);

const LetsConnect = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_gts7qur",
        "template_35vr7cm",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "8Kmun5zjZWkEXiLeX"
      )
      .then(() => {
        showToast("Message sent successfully! I'll get back to you soon", "success");
        setForm({ email: "", subject: "", message: "", name: "" });
      })
      .catch((err) => {
        showToast("Failed to send message. Please try again later.", "error");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <div
        className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4 mb-10"
        id="contact"
      >
        <motion.section
          className="bg-base-100/30 dark:bg-base-200/30 shadow-md shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-10 w-full max-w-screen-xl min-h-screen flex flex-col md:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...smoothSpring }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h1
              className="text-3xl mb-6 text-primary text-center underline"
              style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
            >
              Contact Me
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...gentleSpring }}
                  viewport={{ once: true }}
                >
                  <label className="label capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder={`Your ${field}`}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...gentleSpring, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="label">Message</label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Your Message"
                  onChange={handleChange}
                  value={form.message}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`btn w-full mt-4 relative overflow-hidden ${isLoading
                    ? "btn-disabled bg-neutral/70"
                    : "btn-neutral hover:scale-[1.02] active:scale-[0.98]"
                  } transition-all duration-300`}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-3">
                    <Loader />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </div>

          {/* Info + Icons */}
          <motion.div
            className="w-full md:w-1/2 bg-base-200/30 border border-base-300 rounded-2xl p-6 shadow-inner text-center space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ...gentleSpring, delay: 0.15 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-xl font-bold">Let's Get in Touch</h2>
            <p className="text-sm">
              I'm open to freelance, internships, or just a good dev chat. Reach
              out through the form or connect via links below.
            </p>

            <div className="flex justify-center gap-6 text-2xl mt-4 text-primary">
              <motion.a
                href="https://linkedin.com/in/anujkamaljain-/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/anujkamaljain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub />
              </motion.a>
              <div
                className="tooltip tooltip-primary"
                data-tip="anujkamaljain1234@gmail.com"
              >
                <motion.a
                  href="mailto:anujkamaljain1234@gmail.com"
                  className="hover:text-accent"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
              <div className="tooltip tooltip-primary" data-tip="+919499166336">
                <motion.a
                  href="tel:+919499166336"
                  className="hover:text-accent"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPhoneAlt />
                </motion.a>
              </div>
            </div>

            <p className="text-sm mt-4">🕒 Replies within 24 hours</p>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default LetsConnect;
