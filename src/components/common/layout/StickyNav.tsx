"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavList } from "~/constants/data";

const StickyNav = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const background = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#6E9EB9", "rgba(255, 255, 255, 0.08)"],
  );
  const y = useTransform(scrollYProgress, [0, 0.1], [100, 0]);

  const [position, setPosition] = useState(0);

  const getPositionOnScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight * 2 + 50) {
      setPosition(0);
    } else if (scrollPosition < windowHeight * 3 + 50) {
      setPosition(1);
    } else if (scrollPosition < windowHeight * 4 + 50) {
      setPosition(2);
    } else if (scrollPosition < windowHeight * 5 + 50) {
      setPosition(3);
    } else if (scrollPosition < windowHeight * 6 + 50) {
      setPosition(4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getPositionOnScroll);

    return () => {
      window.removeEventListener("scroll", getPositionOnScroll);
    };
  }, []);

  return (
    <nav className="sticky top-2 z-40 mt-4 hidden justify-center lg:flex">
      <motion.ul
        className="flex gap-10 rounded-full px-8 py-4 shadow-2xl backdrop-blur-xl transition-all duration-300"
        style={{ opacity, background, y }}
      >
        {NavList.map((item) => (
          <li
            key={item.id}
            className={`relative transition duration-300 hover:text-zinc-800 ${
              position === item.id ? "text-zinc-800" : "text-zinc-600"
            }`}
          >
            <Link href={{ pathname: "/", hash: item.url }}>{item.label}</Link>
            <motion.div
              className="absolute bottom-0 h-[2px] bg-primary-500"
              animate={{ width: position === item.id ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
            />
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default StickyNav;
