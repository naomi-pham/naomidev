import { Montserrat } from "next/font/google";
import SectionLayout from "../common/layout/SectionLayout";
import BlogItem from "./components/BlogItem";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Blog = () => {
  return (
    <SectionLayout title="Blog" id="blog">
      <div className="mt-20 gap-y-10 flex flex-col">
        <BlogItem />
        <div className="sm:self-end">
          <BlogItem />
        </div>
      </div>

      <div className="my-2 mt-20 flex justify-center">
        <button
          type="submit"
          className={`text-white hover:bg-accent-500/80 focus:ring-accent-400 w-fit rounded-2xl bg-accent-500 px-4 py-3 text-body-2 font-bold transition duration-300 focus:outline-none focus:ring focus:ring-offset-1 ${montserrat.variable} font-sans`}
        >
          Read more
        </button>
      </div>
    </SectionLayout>
  );
};

export default Blog;
