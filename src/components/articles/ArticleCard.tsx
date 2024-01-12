import Link from "next/link";
import { type IPortfolioCard } from "~/constants/interfaces";
import { IconLink } from "../common/Icons";

const ArticleCard = ({ item }: { item: IPortfolioCard }) => {
  return (
    <tr className="border-b border-zinc-400">
      <td className="truncate px-4 py-10 text-left lg:w-[150px]">
        01 Oct 2023
      </td>
      <td className="truncate px-4 py-10 text-left lg:w-[200px]">
        {item.publication}
      </td>
      <td className="truncate px-4 py-10 text-left lg:w-full">
        {item?.postLink && (
          <Link
            href={item.postLink}
            target="_blank"
            className="group flex items-center gap-2 underline-offset-4 transition-all ease-in-out hover:-translate-y-[1px] hover:text-accent-500 hover:underline"
          >
            {item.title}
            <span>
              <i>
                <IconLink />
              </i>
            </span>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default ArticleCard;
