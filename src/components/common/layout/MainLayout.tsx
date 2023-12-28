"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["#6E9EB9", "#EBECE6"],
  );

  return <motion.main style={{ background }}>{children}</motion.main>;
};

export default MainLayout;
