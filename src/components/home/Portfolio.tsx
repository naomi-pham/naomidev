import Image from "next/image";
import AccordionComponent from "../common/accordion/AccordionComponent";
import SectionLayout from "../common/layout/SectionLayout";
import WritingPortfolio from "./components/WritingPortfolio";

const Portfolio = () => {
  return (
    <SectionLayout
      title="Portfolio"
      id="portfolio"
      page={3}
      leftComponent={<LeftComponent />}
    >
      <AccordionComponent accordionData={PortfolioAccordionData} />
    </SectionLayout>
  );
};

const LeftComponent = () => {
  return (
    <div className="flex">
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

      <div className="relative -top-[50px] lg:top-[150px]">
        <Image
          src="/border-blue.png"
          alt="border"
          width={200}
          height={200}
          className="max-w-[150px] bg-primary-500/50 lg:max-w-[200px]"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center capitalize text-white">
          <span className="text-heading-3">3</span>{" "}
          <span className="block">projects</span>
        </div>
      </div>
    </div>
  );
};

const PortfolioAccordionData = [
  {
    id: 0,
    title: "Writing",
    content: <WritingPortfolio />,
  },
  {
    id: 1,
    title: "Development",
    content: <WritingPortfolio />,
  },
];

export default Portfolio;
