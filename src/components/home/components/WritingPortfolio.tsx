"use client";

import React, { useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { useScroll, motion } from "framer-motion";

const WritingPortfolio = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="mb-4 portfolio-scroll">
      {/* <svg id="progress" width="80" height="80" viewBox="0 0 80 80" className="">
        <circle
          cx="40"
          cy="40"
          r="30"
          pathLength="1"
          className="fill-none stroke-accent-400 stroke-[6px] opacity-10"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="30"
          pathLength="1"
          className="fill-none stroke-accent-400 stroke-[6px]"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}

      <div
        ref={ref}
        className="mt-4 flex scroll-m-4 items-center gap-12 overflow-x-auto"
      >
        {WritingPortfolioList.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const WritingPortfolioList = [
  {
    id: 0,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 1,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 2,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 3,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 4,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 5,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 6,
    project: "Guest Post",
    image: "/writing.png",
  },
];

export default WritingPortfolio;
