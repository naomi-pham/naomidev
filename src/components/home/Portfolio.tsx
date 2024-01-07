import Image from "next/image";
import {
  DevelopmentPortfolioData,
  PortfolioAccordionData,
  WritingPortfolioData,
} from "~/constants/data";
import AccordionComponent from "../common/accordion/AccordionComponent";
import SectionLayout from "../common/layout/SectionLayout";

const Portfolio = () => {
  return (
    <SectionLayout
      title="Portfolio"
      id="portfolio"
      page={3}
      frontElement={<FrontElement />}
      backElement={<BackElement />}
      offset={100}
    >
      <AccordionComponent accordionData={PortfolioAccordionData} />
    </SectionLayout>
  );
};

const BackElement = () => {
  return (
    <div className="relative -top-[50px] lg:top-[150px]">
      <Image
        src="/border-blue.png"
        alt="border"
        width={200}
        height={200}
        className="max-w-[150px] bg-primary-500/50 lg:max-w-[200px]"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center capitalize text-white">
        <span className="text-heading-3">
          {DevelopmentPortfolioData.length + WritingPortfolioData.length}
        </span>{" "}
        <span className="block">projects</span>
      </div>
    </div>
  );
};

const FrontElement = () => {
  return (
    <div className="relative lg:-top-[50px]">
      <Image
        src="/border.png"
        alt="border"
        width={200}
        height={200}
        className="max-w-[150px] lg:max-w-[200px]"
      />
      <Image
        src="/pen.png"
        alt="pen"
        width={100}
        height={100}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Portfolio;
