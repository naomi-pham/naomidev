"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ServiceData } from "~/constants/data";
import { type IServiceTabItem } from "~/constants/interfaces";
import SectionLayout from "../common/layout/SectionLayout";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(ServiceData[0]);

  const handleSetSelectedTab = (tab: IServiceTabItem) => {
    setSelectedTab(tab);
  };

  return (
    <SectionLayout
      title="Work"
      id="work"
      page={2}
      leftComponent={
        <TabLabels
          selectedTab={selectedTab}
          handleSetSelectedTab={handleSetSelectedTab}
        />
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
              <div className="min-w-full sm:min-w-[512px] lg:max-w-lg">
                <h4 className="mb-4 text-heading-4 text-primary-500 md:text-title-1">
                  {selectedTab.title}
                </h4>
                <div>{selectedTab.component}</div>
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
  handleSetSelectedTab,
}: {
  selectedTab: IServiceTabItem | undefined;
  handleSetSelectedTab: (tab: IServiceTabItem) => void;
}) => {
  return (
    <ul className="flex -space-x-24 md:-space-x-32">
      {ServiceData?.map((item) => (
        <li
          key={item.label}
          className={`${
            item === selectedTab
              ? "z-10  text-neutral-50"
              : "bg-primary-500/5 text-neutral-50/40"
          } relative flex  aspect-square w-[200px] cursor-pointer items-center justify-center rounded-full text-center text-title-2 sm:w-[280px] xl:w-[350px] xl:text-heading-3`}
          onClick={() => handleSetSelectedTab(item)}
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

export default Services;
