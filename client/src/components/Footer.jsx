import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral/50 text-neutral-content p-4 flex items-center justify-center">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
