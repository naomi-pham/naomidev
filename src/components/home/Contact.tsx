"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ContactData } from "~/constants/data";
import CustomLink from "../common/buttonOrLink/CustomLink";
import SectionLayout from "../common/layout/SectionLayout";

const parent = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.4,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionLayout title="Contact" id="contact">
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView && "show"}
        variants={parent}
        className="mt-10 grid grid-cols-1 justify-between gap-y-16 sm:grid-cols-2 lg:mt-20"
      >
        {ContactData.map((item) => (
          <motion.li
            variants={child}
            key={item.id}
            className="flex flex-col gap-4"
          >
            <h3 className="text-title-1">{item.title}</h3>
            {item?.content ? (
              <div>{item.content}</div>
            ) : (
              <div className="flex items-center gap-4">
                <i>{item.icon}</i>
                <div className="flex items-center gap-2">
                  <p>{item.label}</p>
                  <div className="aspect-square w-1 rounded-full bg-primary-500"></div>
                  <CustomLink url={item.url}>{item.linkText}</CustomLink>
                </div>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </SectionLayout>
  );
};

export default Contact;
