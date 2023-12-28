"use client";

import { useInView, motion } from "framer-motion";
import React, { useRef, type ReactNode } from "react";

const ContentWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="max-w-lg">
      <motion.h4
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-heading-4 text-primary-500"
      >
        {title}
      </motion.h4>
      <motion.div
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContentWrapper;
