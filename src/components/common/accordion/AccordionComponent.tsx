"use client";

import React, { type ReactNode, useState } from "react";
import AccordionItem from "./AccordionItem";

export interface AccordionItemProps {
  id: number;
  title: string;
  content: ReactNode;
}

const AccordionComponent = ({
  accordionData,
}: {
  accordionData: AccordionItemProps[];
}) => {
  const [openKey, setOpenKey] = useState<null | number>(0);

  const handleToggle = (key: number) => () => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <div className="border-y border-y-primary-500 w-full lg:max-w-lg">
      {accordionData.map((item: AccordionItemProps) => (
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
