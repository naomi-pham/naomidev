import { Montserrat } from "next/font/google";
import ArticleList from "~/components/articles/ArticleList";
import GoBackButton from "~/components/common/buttonOrLink/GoBackButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ArticlePage = () => {
  return (
    <div className="container mx-auto mt-40 max-w-7xl px-4">
      <GoBackButton />
      <h2
        className={`${montserrat.variable} relative font-sans text-heading-3 font-bold uppercase tracking-wider text-primary-500 lg:text-heading-2 mt-10`}
      >
        Published works
      </h2>
      <ArticleList />
    </div>
  );
};

export default ArticlePage;
