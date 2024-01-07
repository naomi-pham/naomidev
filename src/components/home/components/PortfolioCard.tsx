"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ModalComponent from "~/components/common/modal/ModalComponent";
import { type IPortfolioCard } from "~/constants/interfaces";
import PortfolioModalContent from "./PortfolioModalContent";

const PortfolioCard = ({ item }: { item: IPortfolioCard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      <div className="group flex cursor-pointer flex-col items-center justify-center px-2">
        <button className="relative" onClick={openModal}>
          <Image
            src={item.image}
            alt={item.project}
            width={150}
            height={150}
            className="object-fit max-w-[150px] rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/40 to-accent-500/20 transition-all duration-300 ease-in-out group-hover:from-primary-500 group-hover:to-primary-500/10" />
        </button>
        <p className="mt-4 text-center text-body-2 uppercase text-accent-500 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-neutral-900">
          {item.project}
        </p>
      </div>

      {isOpen && (
        <ModalComponent closeModal={closeModal}>
          <PortfolioModalContent item={item} />
        </ModalComponent>
      )}
    </>
  );
};

export default PortfolioCard;
