"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLayout from "../common/layout/SectionLayout";

interface TabProps {
  id: number;
  label: string;
  title: string;
  content: string;
}

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <SectionLayout
      title="Work"
      id="work"
      page={2}
      leftComponent={
        <TabLabels selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      }
    >
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
              <div className="lg:max-w-lg min-w-full sm:min-w-[512px]">
                <h4 className="text-heading-4 text-primary-500 md:text-title-1">
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
    </SectionLayout>
  );
};

const TabLabels = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TabProps | undefined;
  setSelectedTab: (item: TabProps) => void;
}) => {
  return (
    <ul className="flex -space-x-24 md:-space-x-32">
      {tabs.map((item) => (
        <li
          key={item.label}
          className={`${
            item === selectedTab
              ? "z-10  text-neutral-50"
              : "bg-primary-500/5 text-neutral-50/40"
          } relative flex  aspect-square w-[200px] cursor-pointer items-center justify-center rounded-full text-center text-title-2 sm:w-[280px] xl:w-[350px] xl:text-heading-3`}
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
  );
};

const tabs = [
  {
    id: 0,
    label: "My expertise",
    title: "Coding & Writing",
    content:
      "I began coding 2 years ago and have worked a React developer for over a year. It's been a great journey so far as I was exposed to various tools, frameworks, and processes to improve my coding skills and mindset. Moving forward, I hope to dedicate more time to building my own projects and writing about what I learn.",
  },
  {
    id: 1,
    label: "Toolkit",
    title: "My toolkit",
    content:
      "Here are my tools for making things happen:",
  },
];

export default Services;
