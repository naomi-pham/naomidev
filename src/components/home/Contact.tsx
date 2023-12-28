"use client";

import React, { useRef } from "react";
import SectionLayout from "../common/layout/SectionLayout";
import { IconEmail, IconThread } from "../common/Icons";
import Link from "next/link";
import NewsletterForm from "./components/NewsletterForm";
import { useInView, motion } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <SectionLayout title="Contact" id="contact">
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView && "show"}
        variants={parent}
        className="mt-10 grid grid-cols-1 justify-between gap-y-16 sm:grid-cols-2 lg:mt-20"
      >
        {ContactList.map((item) => (
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
                  <Link
                    href={item.url}
                    className="text-primary-500 underline underline-offset-4"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </SectionLayout>
  );
};

const ContactList = [
  {
    id: 0,
    title: "Let's work together",
    icon: <IconEmail />,
    label: "Email",
    url: "/",
    linkText: "Send me a message",
  },
  {
    id: 1,
    title: "Connect on socials",
    icon: <IconThread />,
    label: "Threads",
    url: "/",
    linkText: "Share your thoughts",
  },
  {
    id: 2,
    title: "Subscribe to newsletter",
    content: <NewsletterForm />,
    label: "Newsletter",
  },
];

export default Contact;
