"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ServiceTabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex items-center justify-between">
      <ul className="flex -space-x-32">
        {tabs.map((item) => (
          <li
            key={item.label}
            className={`${
              item === selectedTab
                ? "z-10  text-neutral-50"
                : "bg-primary-500/5 text-neutral-50/40"
            } relative flex  aspect-square w-[350px] cursor-pointer items-center justify-center rounded-full text-center text-heading-3`}
            onClick={() => setSelectedTab(item)}
          >
            {item.label}
            {item === selectedTab ? (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 rounded-full bg-primary-500/50 mix-blend-overlay"
                transition={{ type: "spring", bounce: 0.1, duration: 0.7 }}
              />
            ) : null}
          </li>
        ))}
      </ul>
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? (
              <div className="max-w-lg">
                <h4 className="text-heading-4 text-primary-500">
                  {selectedTab.title}
                </h4>
                <p className="mt-4">{selectedTab.content}</p>
              </div>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const tabs = [
  {
    id: 0,
    label: "Writing",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac tellus fermentum velit vel quis eget varius integer. Pretium tempor vitae praesent cursus lacus. Quis cursus netus risus sit interdum posuere. Scelerisque habitasse aliquam adipiscing adipiscing cras turpis dui.",
  },
  {
    id: 1,
    label: "Development",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ac tellus fermentum velit vel quis eget varius integer. Pretium tempor vitae praesent cursus lacus. Quis cursus netus risus sit interdum posuere. Scelerisque habitasse aliquam adipiscing adipiscing cras turpis dui.",
  },
];

export default ServiceTabs;
