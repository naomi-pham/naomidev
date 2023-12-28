import Link from "next/link";
import { IconBannerArrow } from "../common/Icons";
import Header from "../common/layout/Header";

const Banner = () => {
  return (
    <section className="container mx-auto flex h-screen min-h-screen max-w-[1440px] flex-col px-4 text-neutral-50">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-40 text-center">
        <h1 className="gradient-text-white text-heading-2 uppercase sm:text-heading-1 lg:tracking-widest">
          Naomi Pham
        </h1>
        <p className="text-title-2 font-normal sm:text-heading-3">
          A Writer & Front-End Dev
          <span className="mt-2 block italic">Based in Vietnam</span>
        </p>

        <div className="mt-14">
          <Link href="#about" className="scroll-smooth">
            <IconBannerArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
