"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconBullet } from "~/components/common/Icons";
import { TechStackData } from "~/constants/data";

const TechTabs = () => {
  const [selectedTab, setSelectedTab] = useState(TechStackData[0]);

  return (
    <div className="flex gap-14">
      <ul className="flex flex-col gap-1">
        {TechStackData.map((item) => (
          <li
            key={item.label}
            className={`${
              item === selectedTab ? "z-10 text-accent-500" : "text-zinc-800"
            } relative flex w-max cursor-pointer items-center gap-4 py-2`}
            onClick={() => setSelectedTab(item)}
          >
            <i
              className={`${
                item === selectedTab ? "opacity-100" : "opacity-0"
              }`}
            >
              <IconBullet />
            </i>
            {item.label}
            {item === selectedTab ? (
              <motion.span
                layoutId="bullet"
                className="absolute inset-0 z-10 rounded-full mix-blend-overlay"
                transition={{ type: "spring", bounce: 0.1, duration: 0.7 }}
              />
            ) : null}
          </li>
        ))}
      </ul>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.id : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? (
              <div className="mt-2 max-w-xs text-body-2">
                <p>{selectedTab.description}</p>
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

export default TechTabs;
