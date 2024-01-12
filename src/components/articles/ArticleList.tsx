import { WritingPortfolioData } from "~/constants/data";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  return (
    <table className="group mt-10 w-full table-fixed lg:mt-20">
      <thead>
        <tr className="border-b border-zinc-400 text-xl uppercase tracking-wider text-primary-500">
          <th className="truncate px-4 py-6 text-left lg:w-[150px]">Date</th>
          <th className="truncate px-4 py-6 text-left lg:w-[200px]">
            Website
          </th>
          <th className="truncate px-4 py-6 text-left lg:w-[600px]">Title</th>
        </tr>
      </thead>
      <tbody>
        {WritingPortfolioData.map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default ArticleList;
