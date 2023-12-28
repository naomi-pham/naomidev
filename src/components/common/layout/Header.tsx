"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at right top)`,
    backgroundColor: "#FFFFFF",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(10% at right top)",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const button = {
  open: {
    color: "#6E9EB9",
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    color: "#FFFFFF",
    scale: 1,
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="fixed inset-0 bg-neutral-50" variants={sidebar} />
      <motion.button
        onClick={toggleOpen}
        className="absolute right-4 top-4 z-10 rounded-full"
        variants={button}
      >
        <p
          className={`font-sans ${montserrat.variable} text-title-3 font-bold`}
        >
          Menu
        </p>
      </motion.button>
    </motion.div>
  );
};

export default Header;
