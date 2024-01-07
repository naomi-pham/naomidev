import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
import { type IPortfolioCard } from "~/constants/interfaces";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const PortfolioModalContent = ({ item }: { item: IPortfolioCard }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={`text-title-2 ${montserrat.variable} font-sans font-bold`}>
        {item.project}
      </h2>
      <p>{item.description}</p>
      <div className="flex items-center gap-3">
        {item?.demoLink && (
          <Link
            href={item?.demoLink}
            target="_blank"
            className={`w-fit rounded-lg bg-accent-500 px-4 py-2 text-body-2 text-sm font-bold text-white transition duration-300 hover:bg-accent-500/80 focus:outline-none focus:ring focus:ring-accent-400 focus:ring-offset-1 ${montserrat.variable} font-sans`}
          >
            Demo
          </Link>
        )}
        {item?.githubLink && (
          <Link
            href={item?.githubLink}
            target="_blank"
            className={`w-fit rounded-lg bg-accent-500 px-4 py-2 text-body-2 text-sm font-bold text-white transition duration-300 hover:bg-accent-500/80 focus:outline-none focus:ring focus:ring-accent-400 focus:ring-offset-1 ${montserrat.variable} font-sans`}
          >
            Code
          </Link>
        )}
        {item?.postLink && (
          <Link
            href={item?.postLink}
            target="_blank"
            className={`w-fit rounded-lg bg-accent-500 px-4 py-2 text-body-2 text-sm font-bold text-white transition duration-300 hover:bg-accent-500/80 focus:outline-none focus:ring focus:ring-accent-400 focus:ring-offset-1 ${montserrat.variable} font-sans`}
          >
            Go to post
          </Link>
        )}
      </div>

      {item?.technologies ? (
        <div className="mt-4 space-y-2">
          <p
            className={`text-title-3 ${montserrat.variable} font-sans font-bold`}
          >
            Technologies
          </p>
          <ul className="list-disc ml-4">
            {item.technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioModalContent;
