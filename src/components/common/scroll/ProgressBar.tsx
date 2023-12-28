'use client'

import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed z-0 bottom-4 w-full h-1 bg-primary-600"
      style={{ scaleX }}
    ></motion.div>
  );
};

export default ProgressBar;
