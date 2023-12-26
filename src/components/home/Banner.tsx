import Header from "../common/layout/Header";
import { IconBannerArrow } from "../common/Icons";

const Banner = () => {
  return (
    <section className="min-h-screen bg-primary-500 text-neutral-50">
      <div className="container mx-auto">
        <Header />
        <div className="mt-56 flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="gradient-text-white text-heading-1 uppercase tracking-widest">
            Naomi Pham
          </h1>
          <p className="text-heading-3 font-normal">
            A copywriter
            <span className="mt-2 block italic">Based in Vietnam</span>
          </p>

          <div className="mt-14">
            <IconBannerArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
