"use client";

import { useState } from "react";
import { type IAccordionItem } from "~/constants/interfaces";
import AccordionItem from "./AccordionItem";

const AccordionComponent = ({
  accordionData,
}: {
  accordionData: IAccordionItem[];
}) => {
  const [openKey, setOpenKey] = useState<null | number>(0);

  const handleToggle = (key: number) => () => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <div className="w-full border-y border-y-primary-500 lg:max-w-lg">
      {accordionData.map((item: IAccordionItem) => (
        <AccordionItem
          key={item.id}
          item={item}
          handleToggle={handleToggle}
          open={openKey === item.id}
        />
      ))}
    </div>
  );
};

export default AccordionComponent;
