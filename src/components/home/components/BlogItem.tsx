"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BlogItem = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [offset - 300, offset + 300], ["0%", "20%"]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setOffset(ref.current.offsetTop);
        setMinHeight(ref.current.offsetHeight + 100);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref.current]);

  return (
    <div style={{ minHeight }}>
      <motion.div ref={ref} style={{ y }}>
        <Image
          src="/blog-1.png"
          alt="blog-1"
          width={466}
          height={537}
          className="object-fit max-w-full sm:max-w-[466px]"
        />

        <div className="mt-2 max-w-full sm:max-w-[466px] text-primary-500">
          <h4 className="text-title-2">The 60-30-10 Rule in Web Design</h4>
          <div className="flex items-center justify-between">
            <p>(coming soon)</p>
            <div className="flex gap-1">
              <p className="underline underline-offset-4">web design</p>
              <p>,</p>
              <p className="underline underline-offset-4">tutorial</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogItem;
