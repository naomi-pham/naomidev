"use client";

import { motion, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const AboutImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        ref={ref}
        className="relative flex aspect-square w-[350px] items-end"
      >
        <motion.div
          animate={{ y: isInView ? 0 : 80 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Image
            src="/avatar.png"
            alt="avatar"
            width={250}
            height={250}
            className=""
          />
          <p className="absolute right-4 top-4 text-center text-title-2 text-zinc-500">
            Naomi <span className="block">Pham</span>
          </p>
        </motion.div>
        <h2
          className={`${montserrat.variable} absolute right-0 top-0 font-sans text-[320px] font-bold uppercase leading-[250px] text-primary-500`}
        >
          N
        </h2>
      </div>
    </div>
  );
};

export default AboutImage;
