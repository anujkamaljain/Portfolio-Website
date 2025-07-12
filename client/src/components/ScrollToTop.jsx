import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const yOffset = window.pageYOffset;
      setShow(yOffset > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-all"
        aria-label="Back to top"
      >
        <FaArrowAltCircleUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
