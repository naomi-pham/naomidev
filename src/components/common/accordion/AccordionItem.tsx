/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";
import { type AccordionItemProps } from "./AccordionComponent";
import { IconClose } from "../Icons";

const AccordionItem = ({
  item,
  handleToggle,
  open,
}: {
  item: AccordionItemProps;
  open: boolean;
  handleToggle: (key: number) => void;
}) => {
  const [ref, { height }] = useMeasure();

  return (
    <div
      className={`min-w-full max-w-xs overflow-hidden border-t border-primary-500 first-of-type:border-0`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-4 text-primary-500"
        onClick={handleToggle(item.id)}
      >
        <h4 className="text-heading-4">{item?.title}</h4>

        <div className={`${!open && "-rotate-45"} transition-all duration-200`}>
          <i>
            <IconClose />
          </i>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? height : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 4 : 0,
        }}
      >
        <motion.div ref={ref}>
          <div className={`${open ? "block" : "hidden"} p-4 pt-0`}>
            {item?.content}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
