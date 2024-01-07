import Link from "next/link";
import { NavList } from "./StickyNav";
import { Montserrat } from "next/font/google";
import { useRef } from "react";
import {
  useInView,
  motion,
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
} from "framer-motion";
import { IconEmail } from "../Icons";
import CustomLink from "../buttonOrLink/CustomLink";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MenuNav = ({ closeMenu }: { closeMenu: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const parent = {
    hidden: { opacity: 0, x: -300 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -300 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div ref={ref} className="mx-auto mt-8 flex h-[80%] flex-col gap-20">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isInView ? 0 : 10, opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`${montserrat.variable} container mx-auto max-w-[1440px] px-4 font-sans text-heading-3 font-black text-accent-500`}
        >
          Naomi Pham
        </motion.div>
        <motion.ul
          variants={parent}
          initial="hidden"
          animate={isInView && "show"}
          className={`${montserrat.variable} flex min-w-80 max-w-lg flex-col gap-y-4 font-sans`}
        >
          {NavList.map((item) => (
            <motion.li
              variants={child}
              key={item.id}
              className={`relative border-b-2 border-zinc-400 py-2 text-right text-title-1 font-bold text-zinc-700 transition duration-200 hover:text-accent-500`}
            >
              <Link
                href={{ pathname: "/", hash: item.url }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ delay: 2, duration: 0.3 }}
          className={`container mx-auto flex h-full max-w-[1440px] justify-end gap-4 self-end`}
        >
          <div className="flex flex-col justify-end gap-4 text-right">
            <h3 className="text-title-1 text-zinc-700">Contact</h3>
            <div className="flex items-center gap-4 text-zinc-700">
              <i>
                <IconEmail />
              </i>
              <div className="flex items-center gap-2">
                <p>Email</p>
                <div className="aspect-square w-1 rounded-full bg-primary-500"></div>
                <CustomLink
                  url="mailto:phambaonguyendn@gmail.com"
                  isExternal
                  color="#EB5940"
                >
                  Send me a message
                </CustomLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MenuNav;
