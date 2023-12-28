import Image from "next/image";
import React from "react";

interface CardProps {
  id: number;
  project: string;
  image: string;
}

const PortfolioCard = ({ item }: { item: CardProps }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.project}
          width={150}
          height={150}
          className="object-fit max-w-[150px] rounded-2xl shadow-xl"
        />
        <div className="absolute inset-0 rounded-2xl from-accent-500/40 to-accent-500/20 bg-gradient-to-br transition-all duration-300 ease-in-out group-hover:from-primary-500 group-hover:to-primary-500/10" />
      </div>

      <p className="mt-4 text-center text-body-2 uppercase text-accent-500 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-neutral-900">
        {item.project}
      </p>
    </div>
  );
};

export default PortfolioCard;
