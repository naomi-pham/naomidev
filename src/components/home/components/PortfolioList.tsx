import { type IPortfolioCard } from "~/constants/interfaces";
import PortfolioCard from "./PortfolioCard";

const PortfolioList = ({ data }: { data: IPortfolioCard[] }) => {
  return (
    <div className="portfolio-scroll mb-4">
      <div className="mt-4 flex scroll-m-4 items-center gap-12 overflow-x-auto">
        {data?.map((item) => <PortfolioCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default PortfolioList;
