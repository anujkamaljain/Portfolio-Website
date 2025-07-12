import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const LetsConnect = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

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
        alert("✅ Message sent successfully!");
        setForm({ email: "", subject: "", message: "", name: "" });
      })
      .catch((err) => {
        alert("❌ Failed to send message. Try again later.");
        console.error(err);
      });
  };

  return (
    <div
      className="w-full snap-start pt-10 flex items-center justify-center scroll-mt-20 px-4 mb-10"
      id="contact"
    >
      <motion.section
        className="bg-base-100/30 dark:bg-base-200/30 shadow-md shadow-primary rounded-3xl backdrop-blur-xs border border-base-300 p-6 sm:p-10 w-full max-w-screen-xl min-h-screen flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
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
              <div key={field}>
                <label className="label capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  className="input input-bordered w-full"
                  placeholder={`Your ${field}`}
                  value={form[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-32"
                placeholder="Your Message"
                onChange={handleChange}
                value={form.message}
                required
              />
            </div>

            <button type="submit" className="btn btn-neutral w-full mt-4">
              Send Message
            </button>
          </form>
        </div>

        {/* Info + Icons */}
        <motion.div
          className="w-full md:w-1/2 bg-base-200/30 border border-base-300 rounded-2xl p-6 shadow-inner text-center space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold">Let's Get in Touch</h2>
          <p className="text-sm">
            I'm open to freelance, internships, or just a good dev chat. Reach
            out through the form or connect via links below.
          </p>

          <div className="flex justify-center gap-6 text-2xl mt-4 text-primary">
            <a
              href="https://linkedin.com/in/anujkamaljain-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ willChange: "transform" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/anujkamaljain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ willChange: "transform" }}
            >
              <FaGithub />
            </a>
            <div
              className="tooltip tooltip-primary"
              data-tip="anujkamaljain1234@gmail.com"
            >
              <a
                href="mailto:anujkamaljain1234@gmail.com"
                className="hover:scale-110 transition-transform"
                style={{ willChange: "transform" }}
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="tooltip tooltip-primary" data-tip="+919499166336">
              <a
                href="tel:+919499166336"
                className="hover:scale-110 transition-transform"
                style={{ willChange: "transform" }}
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          <p className="text-sm mt-4">🕒 Replies within 24 hours</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LetsConnect;
