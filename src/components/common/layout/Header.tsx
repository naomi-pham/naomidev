"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuNav from "./MenuNav";

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <header>
      <div className="flex w-full items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="image"
            width={80}
            height={80}
            className="max-w-[64px] object-cover transition duration-300 hover:scale-110"
          />
        </Link>
        <motion.button
          onClick={toggleOpen}
          className="z-10 rounded-full"
          variants={button}
        >
          <p
            className={`${
              isOpen ? "text-zinc-800" : "text-white"
            } z-10 font-sans ${montserrat.variable} text-xl font-bold`}
          >
            {isOpen ? "Close this menu" : "Menu"}
          </p>
        </motion.button>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        className=""
      >
        <motion.div
          className="fixed inset-0 z-0 bg-neutral-50"
          variants={sidebar}
        >
          {isOpen && <MenuNav closeMenu={closeMenu} />}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
