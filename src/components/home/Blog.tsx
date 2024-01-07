import SectionLayout from "../common/layout/SectionLayout";
import BlogCard from "./components/BlogCard";
import ReadMoreButton from "./components/ReadMoreButton";

const Blog = () => {
  return (
    <SectionLayout title="Blog" id="blog">
      <div className="mt-20 flex flex-col gap-y-10">
        <BlogCard />
        <BlogCard />
      </div>

      <div className="my-2 mt-20 flex justify-center">
        <ReadMoreButton />
      </div>
    </SectionLayout>
  );
};

export default Blog;
