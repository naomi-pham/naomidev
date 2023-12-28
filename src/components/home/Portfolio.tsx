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
    <h2 className="text-heading-3 text-primary-500">
      Works I’m most <span className="block">proud of</span>
    </h2>
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
