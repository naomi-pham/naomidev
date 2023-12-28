"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

const ParallaxComponent = ({
  trackElement,
  scrollElement,
}: {
  trackElement: ReactNode;
  scrollElement: ReactNode;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div>
      <div ref={ref}>{trackElement}</div>

      <motion.div style={{ y }}>{scrollElement}</motion.div>
    </div>
  );
};

export default ParallaxComponent;
