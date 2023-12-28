import Link from "next/link";
import { IconBannerArrow } from "../common/Icons";
import Header from "../common/layout/Header";

const Banner = () => {
  return (
    <section className="min-h-screen text-neutral-50">
      <div className="container mx-auto max-w-[1440px]">
        <Header />
        <div className="flex flex-col items-center justify-center gap-8 pt-56 text-center">
          <h1 className="gradient-text-white text-heading-1 uppercase tracking-widest">
            Naomi Pham
          </h1>
          <p className="text-heading-3 font-normal">
            A Copywriter & Front-End Dev
            <span className="mt-2 block italic">Based in Vietnam</span>
          </p>

          <div className="mt-14">
            <Link href="#about" className="scroll-smooth">
              <IconBannerArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
