"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useRef, type ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SectionLayout = ({
  title,
  id,
  children,
  leftComponent,
  page,
  frontElement,
  backElement,
  offset = 0,
}: {
  title: string;
  id: string;
  children?: ReactNode;
  page?: number;
  leftComponent?: ReactNode;
  frontElement?: ReactNode;
  backElement?: ReactNode;
  offset?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [-offset, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-40, 480]);

  return (
    <section
      className="mt-20 flex h-full flex-col justify-center overflow-y-hidden sm:mt-32 lg:mt-0 lg:min-h-screen"
      id={id}
    >
      <div className="container mx-auto px-4 xl:px-8 2xl:max-w-7xl">
        <h2
          className={`${montserrat.variable} relative font-sans text-heading-3 font-bold uppercase tracking-wider text-primary-500 lg:text-heading-2`}
          ref={ref}
        >
          {title}
          <span className="absolute left-4 top-4 text-heading-3 font-bold tracking-wider opacity-[0.08] lg:text-heading-2">
            {title}
          </span>
        </h2>

        {frontElement ? (
          <div className="mt-40 flex flex-col items-center justify-between gap-y-20 lg:flex-row">
            <div className="flex">
              <motion.div style={{ y: y1 }} className="z-10">
                {frontElement}
              </motion.div>
              <motion.div style={{ y: y2 }}>{backElement}</motion.div>
            </div>
            {children}
          </div>
        ) : leftComponent ? (
          <div className="mt-40 flex flex-col items-center justify-between gap-y-20 lg:flex-row">
            <motion.div style={{ y: y1 }} className="z-10">
              {leftComponent}
            </motion.div>
            {children}
          </div>
        ) : (
          <div>{children}</div>
        )}

        {page ? (
          <motion.div className="relative mt-40 hidden justify-end text-heading-3 text-primary-500 lg:flex">
            <motion.p
              style={{ y: y3 }}
              className={`${montserrat.variable} z-10 font-sans font-bold`}
            >
              {`0${page}`}
            </motion.p>
            <motion.img
              src="/flower.png"
              alt="flower"
              height={76}
              width={22}
              className="absolute bottom-3 right-4 max-w-[20px]"
              style={{ y: y4 }}
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default SectionLayout;
